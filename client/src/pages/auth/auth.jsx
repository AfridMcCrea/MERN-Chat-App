import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React, { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleLogin = async () => {};
  const handleSignup = async () => {};
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="w-[700px] h-[800px] lg:w-[600px] lg:h-[600px] shadow-lg :p-10 mt-20 lg:m-20 flex flex-col">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="mx-20 text-3xl">Welcome</h1>
          <Tabs className="w-3/4">
            <TabsList className="rounded-none w-full bg-transparent flex">
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
              <Button className="rounded-full p-6" onClick={handleLogin}>
                Login
              </Button>
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
              <Button className="rounded-full p-6" onClick={handleSignup}>
                Signup
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
