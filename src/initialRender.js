import { addList, tasks } from "./list.js";

const initialRender = () => {
    // console.log("I'm human");
    tasks.forEach((task) => {
        addList(task);
    })
}
export default initialRender;