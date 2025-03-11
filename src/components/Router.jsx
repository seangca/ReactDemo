import Navbar from "../common/Navbar"
import { Route, Switch } from "wouter"
import Home from "../pages/Home"
import Footer from "../common/Footer"
import Events from "../pages/Events"
import Contact from "../pages/Contact"

export default function Router() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
        <Navbar />
        <div className="mt-10">
            <Switch>
                <Route path={"/contact"} component={Contact} />
                <Route path={"/events"} component={Events} />
                <Route path={"/"} component={Home} />
            </Switch>
        </div>
        <Footer />
    </div>
  )
}
