import axios from "axios";

const findUser = (users,userId)=>{
    for(let i=0; i<users.length; i++){
        if(users[i].id === userId) return users[i];
    }
    return {};
}

export const getDataByStatus = async()=>{
    try {
        const res = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        const tickets = res.data.tickets;
        const users = res.data.users;
        const data = {
            backlog:[],
            todo: [],
            progress:[],
            done:[],
            cancel:[],
        }
        for(let i=0; i<tickets.length; i++){
            const user = findUser(users,tickets[i].userId);
            const temp_data = {
                ...tickets[i],
                ...user,
                id:tickets[i].id,
                userId: user.id
            }
            if(temp_data.status === 'Todo') data.todo.push(temp_data);
            else if(temp_data.status === 'In progress') data.progress.push(temp_data);
            else if(temp_data.status === 'Backlog') data.backlog.push(temp_data);
            else if(temp_data.status ===  'Cancel') data.cancel.push(temp_data)
            else if(temp_data.status === 'Done') data.done.push(temp_data);
        }
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("An error occured fetching your data.");
    }
}

export const getDataByUser = async()=>{
    try {
        const res = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        const tickets = res.data.tickets;
        const users = res.data.users;
        const data = [];
        for(let i=0; i<users.length; i++){
            const temp_data = {
                user:users[i],
                tickets: tickets.filter(t => t.userId === users[i].id)
            }
            data.push(temp_data);
        }
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("An error occured fetching your data.");
    }
}

export const getDataByPriority = async()=>{
    try {
        const res = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        const tickets = res.data.tickets;
        const users = res.data.users;
        const data = {
            high: [],
            low: [],
            medium: [],
            urgent: [],
            no: [],
        }
        for(let i=0; i<tickets.length; i++){
            const user = findUser(users,tickets[i].userId);
            const temp_data = {
                ...tickets[i],
                ...user,
                id:tickets[i].id,
                userId: user.id
            }
            switch (temp_data.priority) {
                case 0:
                    data.no.push(temp_data);
                    break;
                case 1: 
                    data.low.push(temp_data);
                    break;
                case 2: 
                    data.medium.push(temp_data);
                    break;
                case 3: 
                    data.high.push(temp_data);
                    break;
                case 4: 
                    data.urgent.push(temp_data);
                    break;
                default:
                    break;
            }
        }
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("An error occured fetching your data.");
    }
}