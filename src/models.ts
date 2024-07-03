export interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
}

export interface ModalDataHelpers {
    editTaskModal: {
        visible: boolean;
        data: Task
    };
}

export const modals: ModalDataHelpers = {
    editTaskModal: {
        visible: false,
        data: {
            id: "Error",
            title: "This should not be here(idk TS well enough :( ",
            isCompleted: false
        }
    },
};
