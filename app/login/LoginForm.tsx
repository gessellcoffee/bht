"use client";

import {User} from "@supabase/supabase-js";

type LoginFormProps = {
    user: User | null;
};

export default function LoginForm({user}: LoginFormProps) {
    return (
        <div>
            <h1>Hello There</h1>
        </div>
    );
}