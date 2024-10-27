
import { Footer } from "flowbite-react";

function MyFooter() {
  return (
   <>
   
   
   <Footer container className=" rounded-none dark:bg-slate-900 ">
      <div className="w-full text-center">
        <Footer.Divider />
        <Footer.Copyright href="#" by="SAIFUL ISLAM™" year={2024} />
      </div>
    </Footer>

   
   </>
  )
}

export default MyFooter