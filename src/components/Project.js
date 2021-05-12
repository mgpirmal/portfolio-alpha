import React, {useEffect,useState} from "react";
import sanityClient from "../client.js";


export default function Project(){
    
    const [projectData,setProjectData]= useState(null);

    useEffect(() =>{

        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            description,
            link,
            tags,
            mainImage{
             asset->{
                  _id,
                   url
            },
            alt
         }
        }`)
        .then((data) =>setProjectData(data))
        .catch(console.error);
    }, []);
    
    
    
    return(
        <main>
        <div className="bg-gray-700 min-h-screen p-12">
            
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive text-white mb-12">My Projects</h1>
                <section className="grid grid-cols-2 gap-8">
                   {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-green-700 p-16" >
                      
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer">{project.title}</a>
                        </h3>
                            <div className="text-gray-500 text-xs space-x-4">
                            <img 
                             src={project.mainImage.asset.url}
                             alt={project.mainImage.alt}
                             className="w-full h-full rounded-r border-8 border-gray-700"/>
                                <span ><strong className="font-bold">Completed on:</strong>{" "}{new Date(project.date).toLocaleDateString()}</span>
                                <p className="my-6 text-lg text-green-200 leading-relaxed">{project.description}</p>
                                <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                View The Project{" "}
                                <span role="img" aria-label="👀"></span>
                                </a>
                            </div>
                        
                    </article>
                    ))}
                </section>
            </section>
        </div>
        </main>
    );
}