"use client"

import { User } from "@supabase/supabase-js"
import { createBrowserClient} from "@supabase/ssr";
import { createServerClient } from "@supabase/ssr";
import Image from "next/image";
import LoginForm from "./LoginForm";

const supabase = await createServerClient()
export default function Page() {
        return (
            <>
                <LoginForm user={null}></LoginForm>
            </>
        )


}
async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: 'valid.email@supabase.io',
        password: 'example-password',
    })
}