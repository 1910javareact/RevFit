import { ILoginState } from ".";
import { User } from "../models/user";
import { revfitLoginType } from "../action-mappers/login-action-mappers";

const initialState: ILoginState = {
    user: new User(0, '', '', '', '', 0, 0, '', 0, 0)
}

export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case revfitLoginType.SUCCESSFUL_LOGIN: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}