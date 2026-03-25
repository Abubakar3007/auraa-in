"use client";
import ModelCard from "@/components/ModelCard";
import modelMen1 from "@/public/images/model-men-1.jpg";
import modelMen2 from "@/public/images/model-men-2.jpg";
import modelMen3 from "@/public/images/model-men-3.jpg";
import Layout from "@/components/Layout";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const menModels = [
    { name: "BHANUJ", image: modelMen1.src, link: "/men/bhanuj" },
    { name: "ANDRE", image: modelMen2.src, link: "/men/andre" },
    { name: "VIKRAM", image: modelMen3.src, link: "/men/vikram" },
    { name: "RODRIGO", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop", link: "/men/rodrigo" },
    { name: "ARJUN", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop", link: "/men/arjun" },
    { name: "RAHUL", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop", link: "/men/rahul" },
    { name: "KARAN", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=800&fit=crop", link: "/men/karan" },
    { name: "ADITYA", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop", link: "/men/aditya" },
    { name: "VARUN", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&h=800&fit=crop", link: "/men/varun" },
];

const Men = () => {
    const params = useParams();
    const gender = params.genders;

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchJoinUser = async () => {
            try {
                const genderMap: any = {
                    men: "male",
                    women: "female",
                };

                const genderValue = genderMap[gender as string];

                const response = await fetch(`/api/join?gender=${genderValue}`);
                if (!response.ok) throw new Error("Failed");

                const data = await response.json();
                setUsers(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (gender) fetchJoinUser();
    }, [gender]);

    return (
        <Layout>
            <main className="pt-32 md:pt-48 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {users.map((user: any, index: number) => (
                            <div
                                key={user.id}
                                className="opacity-0 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <ModelCard 
                                    id={user.id}
                                    gender={gender as string}
                                    firstName={user.firstName} 
                                    lastName={user.lastName} 
                                    images={user.images} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Men;