import ContactMapCard from "@/components/common/ContactMapCard";
export default function ContactMap() {
  return (
    <div id="offices">
      <ContactMapCard
        title="Romania "
        address="Str. Sg. Constantin Moise 5 D, SECTORUL 6, BUCHAREST"
        phone="+385 1 6064 420"
        email="info.hr@dekra.com"
        hours="Workdays 08:30 – 16:30"
        mapEmbedUrl="https://maps.google.com/maps?width=600&height=400&hl=en&q=Str.%20Sg.%20Constantin%20Moise%205%20D%20BUCURESTI%2C%20Loc.%20SECTORUL%206&t=&z=14&ie=UTF8&iwloc=B&output=embed" // Use the correct embed link
        mapLink="https://www.google.com/maps/search/Str.+Sg.+Constantin+Moise+5+D+BUCURESTI,+Loc.+SECTORUL+6/@44.4294868,26.0369059,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" // Optional
      />
      <ContactMapCard
        title="UAE [Dubai]"
        address="The One Tower, Fl.24, DUBAI, UAE"
        phone="+385 1 6064 420"
        email="info.hr@dekra.com"
        hours="Workdays 08:30 – 16:30"
        mapEmbedUrl="https://maps.google.com/maps?width=600&height=400&hl=en&q=The%20One%20Tower%2C%20Fl.24%2C%20DUBAI%2C%20UAE&t=&z=14&ie=UTF8&iwloc=B&output=embed" // Use the correct embed link
        mapLink="https://www.google.com/maps/place/The+One+Tower/@25.101272,55.1712551,17z/data=!3m2!4b1!5s0x3e5f6823542b71c7:0x8e9faf5dcfac2cda!4m6!3m5!1s0x3e5f6b717800ddc9:0x80e8763d2c32aea7!8m2!3d25.1012672!4d55.17383!16s%2Fm%2F043sbt6?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" // Optional
      />
      <ContactMapCard
        title="Qatar"
        address="Global Business Center, Cornish Road, Doha, Qatar"
        phone="+385 1 6064 420"
        email="info.hr@dekra.com"
        hours="Workdays 08:30 – 16:30"
        mapEmbedUrl="https://maps.google.com/maps?width=600&height=400&hl=en&q=Global%20Business%20Center%2C%20Cornish%20Road%2C%20Doha%2C%20Qatar&t=&z=14&ie=UTF8&iwloc=B&output=embed" // Use the correct embed link
        mapLink="https://www.google.com/maps/place/Global+Business+Centre/@25.2792508,51.5492179,17z/data=!3m1!4b1!4m6!3m5!1s0x3e45c57a1e5989ad:0x735a51a8600ee447!8m2!3d25.279246!4d51.5517928!16s%2Fg%2F11c1qy6gws?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" // Optional
      />
    </div>
  );
}
