import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container } from "../styles/PersonStyled";


type Profile = {
   name: string;
   id: number;
   visibility: string
};

const Profile = () => {
   const router = useRouter();
   const { person } = router.query;
   const [profile, setProfile] = useState<Profile[]>([]);

   console.log(person);

   async function getProfile() {
      const response = await (
         await fetch(`https://api.github.com/users/${person}/repos`)
      ).json();

      setProfile(response);
   }

   useEffect(() => {
      getProfile();
   }, [person]);



   return (


      <Container>
         <h1>Repositórios da API do GitHub com Dinamic Routes do Next JS</h1>
         <section>
            {
               profile && profile.map((profile: Profile, i) => (
                  <div key={i}>
                     <h2>Repositorio {i + 1}</h2>
                     <p><span>Nome :</span> {profile.name}</p>
                     <p><span>Id :</span> {profile.id}</p>
                     <p><span>Visibilidade:</span> {profile.visibility}</p>
                  </div>
               ))
            }
         </section>

      </Container>

   );
};

export default Profile;

