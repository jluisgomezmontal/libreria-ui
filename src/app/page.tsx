"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { gridClasses, inputFields, variants } from "@/utils/utils";
import { Button, Input, Modal, Card } from "../components";
import { Save } from "lucide-react";
import { UserProfile } from "@/components/User/UserProfile";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/auth");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  if (checkingAuth) return null;

  return (
    <div>
      <UserProfile/>
      {/* Todos tus grids de botones */}
      <div className={gridClasses}>
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            Guardar
          </Button>
        ))}
      </div>

      <div className={gridClasses}>
        {variants.map((variant) => (
          <Button key={variant} variant={variant} leftIcon={Save}>
            Guardar
          </Button>
        ))}
      </div>

      <div className={gridClasses}>
        {variants.map((variant) => (
          <Button key={variant} variant={variant} rightIcon={Save}>
            Guardar
          </Button>
        ))}
      </div>

      <div className={gridClasses}>
        {variants.map((variant) => (
          <Button key={variant} variant={variant} leftIcon={Save} state="disabled">
            Guardar
          </Button>
        ))}
      </div>

      <div className={gridClasses}>
        {variants.map((variant) => (
          <Button key={variant} variant={variant} leftIcon={Save} state="loading">
            Guardar
          </Button>
        ))}
      </div>

      {/* Inputs dinámicos */}
      <div className="space-y-4 max-w-sm mx-auto mt-10">
        {inputFields.map((field, index) => (
          <Input key={index} {...field} />
        ))}
      </div>

      {/* Modal */}
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Título del modal"
          size="large"
          footer={
            <div className="flex justify-end space-x-2">
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button variant="primary">Guardar</Button>
            </div>
          }
        >
          <p className="text-sm text-gray-600">
            Este es el contenido del body del modal.
          </p>
        </Modal>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        <Card
          imageSrc="https://miro.medium.com/v2/1*v3XndYeIsBtk4CkpMf7vmA.jpeg"
          header={<h3 className="text-lg font-semibold">Título del card</h3>}
          footer={<Button variant="primary">Ver más</Button>}
          borderStyle="shadow"
        >
          <p className="text-gray-600 text-sm">
            Este es el cuerpo del card, puedes poner texto o contenido React.
          </p>
        </Card>

        <Card
          header={<h3 className="text-lg font-semibold">Otro card</h3>}
          borderStyle="outline"
        >
          <p className="text-gray-600 text-sm">
            Card sin imagen, con borde outline.
          </p>
        </Card>
      </div>
      <Dashboard/>
    </div>
  );
}
