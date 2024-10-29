import NoPriority from '../icons_FEtask/No-priority.svg'
import HighPriority from '../icons_FEtask/Img - High Priority.svg'
import LowPriority from '../icons_FEtask/Img - Low Priority.svg'
import MediumPriority from '../icons_FEtask/Img - Medium Priority.svg'
import Urgent from '../icons_FEtask/SVG - Urgent Priority colour.svg'

export const PriorityMap = {
    0:"no",
    1:"low",
    2:"medium",
    3:"high",
    4:"urgent"
}
export const PriorityTypes = {
    no: {
        title: "No priority",
        icon: NoPriority
    },
    high: {
        title: "High",
        icon: HighPriority
    },
    low: {
        title: "Low",
        icon: LowPriority
    },
    medium: {
        title: "Medium",
        icon: MediumPriority
    },
    urgent: {
        title:"Urgent",
        icon: Urgent
    }
}