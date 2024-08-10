import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React, { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleLogin = async() => {};
  const handleSignup = async() => {};
  return (
    <div>
      <div className=" w-[400px] h-[600px] shadow-lg p-10 m-20">
        <div className="">
          <h1 className="mx-20 text-3xl">Welcome</h1>
        </div>

        <div className="flex flex-row items-center justify-center w-full">
          <Tabs className="w-3/4">
            <TabsList className="rounded-none w-full bg-transparent">
              <TabsTrigger
                className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-purple-500 p-3 transition-all duration-300"
                value="login"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-purple-500 p-3 transition-all duration-300"
                value="login"
                value="signup"
              >
                Signup
              </TabsTrigger>
            </TabsList>
            <TabsContent className="flex flex-col gap-5 mt-10" value="login">
              <Input
                className="rounded-full p-6"
                value={email}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                className="rounded-full p-6"
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className='rounded-full p-6' onClick={handleLogin}>Login</Button>
            </TabsContent>
            <TabsContent className="flex flex-col gap-5" value="signup">
              <Input
                className="rounded-full p-6"
                value={email}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                className="rounded-full p-6"
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                className="rounded-full p-6"
                value={confirmPassword}
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button className='rounded-full p-6' onClick={handleSignup}>Signup</Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
