import Image from 'next/image'

const Stake= () => {
    return (
      <div className="flex flex-col lg:flex-row bg-base-200 p-6 rounded-lg shadow-md">
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
        <Image
          src="https://www.actualitix.com/wp-content/uploads/2017/08/cameroun-carte.jpg"
          alt="Carte du Cameroun"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 lg:pl-6">
        <h2 className="text-3xl font-bold text-primary mb-4">Les Instruments Juridiques au Cameroun</h2>
        <p className="text-base-content mb-4">
          Les instruments juridiques au Cameroun représentent un pilier fondamental pour le
          développement durable et la gouvernance efficace du continent. Ils englobent un éventail
          de traités, conventions et accords qui façonnent le paysage légal et réglementaire,
          favorisant ainsi la stabilité, l'intégration régionale et la protection des droits
          humains.
        </p>
        <ul className="list-disc list-inside text-base-content">
          <li>Stabilité et intégration régionale.</li>
          <li>Protection des droits humains.</li>
          <li>Sécurité des investissements.</li>
          <li>Promotion de l'équité et de la justice sociale.</li>
        </ul>
      </div>
    </div>
    );
}
export default Stake;
