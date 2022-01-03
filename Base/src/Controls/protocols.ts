

export namespace StateAdapter {

    export type Handler = {
        data: {
            onInput: (key:string, value:any, captial?: boolean) => void
            get: Record<string, any>,
            set: (params: Record<string, any>)=>void ,
            clear: ()=>void
        },
        errors:{
            get: Record<string, any>,
            set: (params: Record<string, any>)=>void ,
            clear: ()=>void
        },
        loading:{
            get: boolean,
            set: (params:boolean)=>void ,
        }
    }
}

export namespace FCKControls {
    export type Params = {
        name: string,
        label?: string,
        state: StateAdapter.Handler
        placeHolder?:string,
        className?:string
    }
}