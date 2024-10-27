import Banner from "../banner/Banner"
import MyFooter from "../footer/MyFooter"
import Header from "../Header"
import TaskTable from "../task-table/TaskTable"


function Layout() {
  return (
    <>
    <Header />
    <Banner />
    <TaskTable />
    <MyFooter />
    </>
  )
}

export default Layout