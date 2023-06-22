export default function Tables() {
    return (
        <div className="flex gap-3 h-full">
            <table className="primary-border mt-5 ml-5 w-[480px]">
                <thead className="primary-bg text-white text-center">
                    <tr>
                        <th colSpan={3} className="pt-2.5 pb-2.5">Antescendentes Familiares</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="slim-border p-2">
                        <td className=""></td>
                        <td className="slim-border pr-3 pl-3">Si</td>
                        <td className="slim-border pr-3 pl-3">No</td>
                    </tr>
                    <tr className="border border-black ">
                        <td className="pl-1">TBC</td>
                        <td className="slim-border"> <input id="option" type="radio" name="option" value="si" /></td>
                        <td className="slim-border"> <input id="option" type="radio" name="option" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="pl-1">Hepatitis(A,B,C)</td>
                        <td className="slim-border"> <input type="radio" name="option2" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option2" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">VIH</td>
                        <td className="slim-border"> <input type="radio" name="option3" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option3" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">ITS</td>
                        <td className="slim-border"> <input type="radio" name="option4" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option4" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Cancer</td>
                        <td className="slim-border"> <input type="radio" name="option5" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option5" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Diabetes</td>
                        <td className="slim-border"> <input type="radio" name="option6" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option6" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Alergia a Medicamento</td>
                        <td className="slim-border"> <input type="radio" name="option7" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option7" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Hipertension</td>
                        <td className="slim-border"> <input type="radio" name="option8" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option8" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Condicion Medica Grave</td>
                        <td className="slim-border"> <input type="radio" name="option9" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option9" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Cardiopatias</td>
                        <td className="slim-border"> <input type="radio" name="option10" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option10" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Nefropatias</td>
                        <td className="slim-border"> <input type="radio" name="option11" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option11" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Alteraciones en Salud Mental</td>
                        <td className="slim-border"> <input type="radio" name="option12" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option12" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Alcoholismo/Drogas</td>
                        <td className="slim-border"> <input type="radio" name="option13" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option13" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Violencia Familiar</td>
                        <td className="slim-border"> <input type="radio" name="option14" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option14" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Otro</td>
                        <td className="slim-border"> <input type="radio" name="option15" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="option15" value="no" defaultChecked /> </td>
                    </tr>

                </tbody>
            </table>

            <table className="primary-border mt-5 mr-5 w-full">
            <thead className="m-0">
              <tr>
                <th colSpan="2" className="primary-bg text-white">Antescendentes Personales</th>
              </tr>
            </thead>

            <tbody className="h-full">
              <tr>
                <td className="flex justify-start p-0">
                  <table className=" w-full m-0 primary-border ">
                    <thead>
                      <tr>
                        <th colSpan="3" className="primary-bg text-white">
                          Fisiologicos
                        </th>
                      </tr>
                      <tr>
                        <td className=""></td>
                        <td className="slim-border pr-3 pl-3">Si</td>
                        <td className="slim-border pr-3 pl-3">No</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-[#151727] border-r-0">
                        <td className="">Nacimiento Normal</td>
                        <td className="slim-border"> <input type="radio" name="optionF1" value="si" defaultChecked /></td>
                        <td> <input type="radio" name="optionF1" value="no" /> </td>
                      </tr>
                      <tr className="border border-[#151727] border-r-0">
                          <td className="slim-border">Crecimiento Normal</td>
                          <td className="slim-border"> <input type="radio" name="optionF2" value="si" defaultChecked /></td>
                          <td > <input type="radio" name="optionF2" value="no" /> </td>
                      </tr>
                      <tr className="border border-[#151727] border-r-0">
                          <td className="slim-border">Desarrollo Normal</td>
                          <td className="slim-border"> <input type="radio" name="optionF3" value="si" defaultChecked /></td>
                          <td > <input type="radio" name="optionF3" value="no" /> </td>
                      </tr>
                      <tr className="border border-[#151727] border-r-0">
                          <td className="slim-border">Vacunas Completas</td>
                          <td className="slim-border"> <input type="radio" name="optionF4" value="si" defaultChecked /></td>
                          <td > <input type="radio" name="optionF4" value="no" /> </td>
                      </tr>
                      <tr className="border border-[#151727] border-r-0">
                          <td className="slim-border">Escolaridad Normal</td>
                          <td className="slim-border"> <input type="radio" name="optionF5" value="si" defaultChecked /></td>
                          <td > <input type="radio" name="optionF5" value="no" /> </td>
                      </tr>
                      <tr className="border border-[#151727] border-r-0">
                          <td className="slim-border">Otros</td>
                          <td className="slim-border"> <input type="radio" name="optionF6" value="si" /></td>
                          <td > <input type="radio" name="optionF6" value="no" defaultChecked /> </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="p-0">
                <table className="h-full w-full m-0 primary-border">
                    <thead>
                      <tr>
                        <th colSpan="3" className="primary-bg text-white">Patologicos</th>
                      </tr>
                      <tr className="slim-border p-2">
                        <td className="slim-border"></td>
                        <td className="slim-border pr-3 pl-3">Si</td>
                        <td className="slim-border pr-3 pl-3">No</td>
                      </tr>
                    </thead>
                    <tbody>
                    <tr className="slim-border">
                        <td className="">TBC</td>
                        <td className="slim-border"> <input type="radio" name="optionP" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Hepatitis(A,B,C)</td>
                        <td className="slim-border"> <input type="radio" name="optionP2" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP2" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">VIH</td>
                        <td className="slim-border"> <input type="radio" name="optionP3" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP3" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">ITS</td>
                        <td className="slim-border"> <input type="radio" name="optionP4" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP4" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Infertilidad</td>
                        <td className="slim-border"> <input type="radio" name="optionP5" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP5" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Cirugias Previas</td>
                        <td className="slim-border"> <input type="radio" name="optionP6" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP6" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Diabetes</td>
                        <td className="slim-border"> <input type="radio" name="optionP7" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP7" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Alergia de Medicamentos</td>
                        <td className="slim-border"> <input type="radio" name="optionP8" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP8" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Trans. Hipertensivo Embarazo</td>
                        <td className="slim-border"> <input type="radio" name="optionP9" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP9" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Condicion Medica Grave</td>
                        <td className="slim-border"> <input type="radio" name="optionP10" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP10" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Cardiopatias</td>
                        <td className="slim-border"> <input type="radio" name="optionP11" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP11" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Nefropatias</td>
                        <td className="slim-border"> <input type="radio" name="optionP12" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP12" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Alteraciones en Salud Mental</td>
                        <td className="slim-border"> <input type="radio" name="optionP13" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP13" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Alcoholismo/Drogas</td>
                        <td className="slim-border"> <input type="radio" name="optionP14" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP14" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Violencia Familiar</td>
                        <td className="slim-border"> <input type="radio" name="optionP15" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP15" value="no" defaultChecked /> </td>
                    </tr>
                    <tr className="slim-border">
                        <td className="slim-border">Otro</td>
                        <td className="slim-border"> <input type="radio" name="optionP16" value="si" /></td>
                        <td className="slim-border"> <input type="radio" name="optionP16" value="no" defaultChecked /> </td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
    )
}