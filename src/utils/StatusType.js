import cancel from '../icons_FEtask/Cancelled.svg'
import progress from '../icons_FEtask/in-progress.svg'
import todo from '../icons_FEtask/To-do.svg'
import done from '../icons_FEtask/Done.svg'
import backlog from '../icons_FEtask/Backlog.svg'
export const SectionMap = {
    "In progress": "progress",
    "Done": "done",
    "Todo":"todo",
    "Cancel":"cancel",
    "Backlog":"backlog"
}
export const SectionTypes = {
    progress:{
        title_name: "In Progress",
        title_icon: progress
    },
    cancel:{
        title_name: "Cancel",
        title_icon: cancel
    },
    todo: {
        title_icon: todo,
        title_name: "To-Do"
    },
    done: {
        title_name: "Done",
        title_icon: done
    },
    backlog: {
        title_name:"Backlog",
        title_icon: backlog
    }
}