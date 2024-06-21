'use client'
import Image from 'next/image'
import { useEffect, useState} from 'react'

interface Project {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
}

const page = () => {

  const skills = [
    {
      name: "C++ and DSA",
      icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
      name: "Python and Django Framework",
      icon: "https://img.icons8.com/color/48/000000/python.png"
    },
    {
      name: "Java",
      icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"
    },
    {
      name: "HTML",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
      name: "CSS/ TAILWIND CSS",
      icon: "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
      name: "JavaScript/ TypeScript",
      icon: "https://img.icons8.com/color/48/000000/javascript.png"
    },
    {
      name: "React",
      icon: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "Next.js",
      icon: "/next.svg"
    },
    {
      name: "MYSQL",
      icon: "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
      name: "GITHUB",
      icon: "https://img.icons8.com/color/48/000000/github--v1.png"
    },
    {
      name: "Linux",
      icon: "https://img.icons8.com/color/48/000000/linux.png"
    },
    {
      name: "Spring Boot",
      icon: "https://img.icons8.com/color/48/000000/spring-logo.png"
    },
    {
      name: "Node.js and Express.js",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
      name: "Machine Learning",
      icon: "/aiml.jpg"
    }
  ]

  const [url, setUrl] = useState('')
  const [projects, setProjects] = useState<Project[]>([]);

  const getGitHubProfile = async () => {
    const res = await fetch('https://api.github.com/users/SUBHAM-BANERJEE-2003')
    const data = await res.json()
    setUrl(data.avatar_url)
    setProjects(data.repos_url)
  }

  const getProjects = async () => {
    const res = await fetch('https://api.github.com/users/SUBHAM-BANERJEE-2003/repos')
    const data = await res.json()
    console.log(data)
    setProjects(data)
  }

  useEffect(() => {
    getGitHubProfile()
    getProjects()
  }, [])

  return (
    <div>
      <div className='flex justify-center items-center p-16 text-xl tracking-tight font-semibold'>
  <div className='text-center mr-8'>
    <p>Hii, my name is </p>
    <h1 className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 via-green-400 from-blue-600'>Subham Banerjee</h1>
    <p>and I'm a Software Developer and passionate about</p>
    <h2 className='text-2xl text-transparent bg-clip-text bg-gradient-to-tr to-orange-500 via-red-400 from-yellow-600 italic'>Web Development | Machine Learning | DataStructures | Programming</h2>
  </div>
  <div className='flex justify-center'>
    <Image src={url} alt='Profile Picture' width={200} height={200} className='rounded-full'/>
  </div>
</div>

<div className='p-16 text-xl tracking-tight font-semibold mt-8'>
<h1 className='text-2xl font-bold' id="skills">Skills</h1>
<div className='bg-gradient-to-tr to-gray-100 via-gray-200 from-gray-100 rounded-lg p-5 shadow-lg'>
    <div className='flex items-center'>
    <div className='grid grid-cols-3 gap-4 mt-4'>
      {skills.map((skill, index) => (
        <div key={index} className='flex items-center bg-gradient-to-tr to-purple-600 via-pink-400 from-blue-600 rounded-lg'>
          <Image src={skill.icon} alt={skill.name} width={50} height={50}/>
          <p className='ml-2'>{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
  </div>
</div>
  
<div className='p-16 text-xl tracking-tight font-semibold mt-8' id="projects">
      <h1 className='text-2xl font-bold'>Projects</h1>
      <div className='bg-gradient-to-tr to-gray-100 via-gray-200 from-gray-100 rounded-lg p-5 shadow-lg'>
        <div className='grid grid-cols-2 gap-4 mt-4'>
        {projects.map((project, index) => (
            <div key={index} className='flex items-center bg-gradient-to-tr to-purple-600 via-pink-400 from-blue-600 rounded-lg p-4'>
              <p>{project.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default page