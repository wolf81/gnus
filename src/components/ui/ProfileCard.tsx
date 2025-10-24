import type { ReactNode } from "react";
import Card from "./Card";

interface ProfileCardProps {
    name: string
    role: string,
    image: string
    children: ReactNode,
    linkedIn?: string
    twitter?: string
}

export default function ProfileCard({ name, role, image, children, twitter, linkedIn }: ProfileCardProps) {
    return (
        <Card className="max-w-md mx-auto p-4">
            <div className="flex items-start gap-4">
                {/* Image */}
                <img
                    src={image}
                    alt="Profile"
                    className="w-[5.5rem] h-[5.5rem] object-cover rounded-xl"
                />

                {/* Name and social links */}
                <div className="flex-1">
                    <h2 className="font-semibold text-left text-[#FFF]">{name}</h2>
                    <h2 className="text-left text-xs text-muted-foreground">{role}</h2>
                    <div className="flex gap-3 mt-1 text-sm text-muted-foreground">
                        {linkedIn && (
                            <a
                                href={linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 text-xs"
                            >
                                <div className="flex items-baseline gap-2">
                                    <img
                                        src="/gnus/linkedin-xs.png"
                                        alt="LinkedIn"
                                        className="w-[18px] h-[18px]"
                                    /> LinkedIn

                                </div>
                            </a>
                        )}
                        {twitter && (
                            <a
                                href={twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 text-xs">
                                <div className="flex items-baseline gap-2 py-[2px]">

                                    <img
                                        src="/gnus/x-xs.png"
                                        alt="X"
                                        className="w-[18px] h-[18px]"
                                    />
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-4 text-xs text-muted-foreground text-left">
                {children}
            </div>
        </Card>
    )
}
