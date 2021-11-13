import { Component } from 'react'
import { getAvailablePageList, IPageMeta } from 'src/pages/PageList'
import theme from 'src/themes/styled.theme'
import styled from 'styled-components'
import { Box } from 'rebass'
import Profile from 'src/pages/common/Header/Menu/Profile/Profile'
import MenuMobileLink from 'src/pages/common/Header/Menu/MenuMobile/MenuMobileLink'
import MenuMobileExternalLink from './MenuMobileExternalLink'
import { AuthWrapper } from 'src/components/Auth/AuthWrapper'
import { getExternalLinks } from 'src/utils/navigation'

const PanelContainer = styled(Box)`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  display: block;
  z-index: ${theme.zIndex.header};
  height: 100%;
`

const PanelMenu = styled(Box)`
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  display: block !important;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  overflow: visible;
  min-width: 200px;
`
export const PanelItem = styled(Box as any)`
  padding: ${theme.space[3]}px 0px;
`

export const MenuMobileLinkContainer = styled(Box as any)`
  border-top: 1px solid ${theme.colors.lightgrey};
  border-bottom: 1px solid ${theme.colors.lightgrey};
  margin-top: 5px;
`

export class MenuMobilePanel extends Component {
  state = {
    menuItems: [],
    externalLinks: [],
  }

  async componentDidMount() {
    const menuItems = await getAvailablePageList()
    const externalLinks = await getExternalLinks()
    this.setState({ menuItems, externalLinks: externalLinks })
  }

  render() {
    return (
      <>
        <PanelContainer>
          <PanelMenu>
            {(this.state.menuItems || []).map((page: IPageMeta) => {
              const link = (
                <MenuMobileLink
                  path={page.path}
                  content={page.title}
                  key={page.path}
                />
              )
              return page.requiredRole ? (
                <AuthWrapper roleRequired={page.requiredRole} key={page.path}>
                  {link}
                </AuthWrapper>
              ) : (
                link
              )
            })}
            <Profile isMobile={true} />
            {this.state.externalLinks.length >= 1 && (
              <MenuMobileLinkContainer>
                {this.state.externalLinks.map(({ link, title }, idx) => (
                  <MenuMobileExternalLink
                    key={idx}
                    content={title}
                    href={link}
                  />
                ))}
              </MenuMobileLinkContainer>
            )}
          </PanelMenu>
        </PanelContainer>
      </>
    )
  }
}

export default MenuMobilePanel
