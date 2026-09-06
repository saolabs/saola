/** Shapes exchanged by the demo controllers. HTTP inputs still need server validation. */
export interface BoardCard { id: number; title: string }
export interface BoardColumn { key: string; label: string; cards: BoardCard[] }
export interface RosterRecord {
    uuid: string;
    name: string;
    email: string;
    gender: string;
    birthdate: string;
    updated_at: number;
}
export interface Todo { id: number; text: string; completed: boolean }
export interface StreamEvent {
    id: number;
    [key: string]: string | number;
}
export interface StressUser {
    id: number;
    name: string;
    email: string;
    rev: number;
    active: boolean;
    roles: { name: string }[];
}
export interface DemoRow { id: number; name: string; hits: number }
