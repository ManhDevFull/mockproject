import { Layout } from "antd"
import HeaderPage from "../../Components/HeaderPage/HeaderPage"
import { Outlet } from "react-router-dom"
const { Content } = Layout
function LayoutDefault() {
    return (
        <>
            <Layout>
                <HeaderPage />
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </>
    )
}
export default LayoutDefault