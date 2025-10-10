import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { useState, type FormEvent, useEffect } from "react";
import { db } from "../../services/firebaseConnection";
import { doc, setDoc, getDoc } from "firebase/firestore";

function Networks() {
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setLinkedin(snapshot.data()?.linkedin);
          setInstagram(snapshot.data()?.instagram);
          setYoutube(snapshot.data()?.youtube);
        }
      });
    }

    loadLinks();
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      linkedin: linkedin,
      instagram: instagram,
      youtube: youtube,
    });

    setLinkedin("");
    setInstagram("");
    setYoutube("");
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas Redes Sociais
      </h1>

      <form onClick={handleRegister} className="flex flex-col max-w-xl w-full">
        <label className="text-white font-medium mt-2 mb-2">
          Link do linkedin
        </label>
        <Input
          placeholder="digite a url do Linkedin..."
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do Instagram
        </label>
        <Input
          placeholder="digite a url do instagram..."
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do Youtube
        </label>
        <Input
          placeholder="digite a url do youtube..."
          type="url"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium cursor-pointer"
        >
          Salvar links
        </button>
      </form>
    </div>
  );
}

export default Networks;
