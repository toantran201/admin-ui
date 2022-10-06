import { BaseCheckbox, BaseRadio } from '~/components'

const CheckboxesRadios = () => {
  return (
    <>
      <div className="bg-nav-header p-6">
        <h1 className="text-heading">Checkboxes</h1>
        <div className="mt-3 grid grid-cols-3 gap-x-5 gap-y-5">
          <div>
            <p className="text-heading">Default Checkbox</p>
            <div className="mt-4">
              <BaseCheckbox label="Default Checkbox" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checked Checkbox" checked readOnly />
            </div>
          </div>

          <div>
            <p className="text-heading">Disabled Checkbox</p>
            <div className="mt-4">
              <BaseCheckbox label="Default Checkbox" disabled={true} />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checked Checkbox" checked readOnly disabled={true} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-nav-header p-6">
        <h1 className="text-heading">Custom checkboxes</h1>
        <div className="mt-3 grid grid-cols-3 gap-x-5 gap-y-5">
          <div>
            <p className="text-heading">Filled Checkbox</p>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Primary" checked readOnly />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Secondary" checked readOnly color="secondary" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Info" checked readOnly color="info" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Success" checked readOnly color="success" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Warning" checked readOnly color="warning" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Danger" checked readOnly color="danger" />
            </div>
          </div>

          <div>
            <p className="text-heading">Outlined Checkbox</p>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Primary" checked variant="outlined" readOnly />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Secondary" checked variant="outlined" readOnly color="secondary" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Info" checked variant="outlined" readOnly color="info" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Success" checked variant="outlined" readOnly color="success" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Warning" checked variant="outlined" readOnly color="warning" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Danger" checked variant="outlined" readOnly color="danger" />
            </div>
          </div>

          <div>
            <p className="text-heading">Soft Checkbox</p>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Primary" checked soft readOnly />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Secondary" checked soft readOnly color="secondary" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Info" checked soft readOnly color="info" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Success" checked soft readOnly color="success" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Warning" checked soft readOnly color="warning" />
            </div>
            <div className="mt-4">
              <BaseCheckbox label="Checkbox Danger" checked soft readOnly color="danger" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-nav-header p-6">
        <h1 className="text-heading">Radios</h1>
        <div className="mt-3 grid grid-cols-3 gap-x-5 gap-y-5">
          <div>
            <p className="text-heading">Default Radio</p>
            <div className="mt-4">
              <BaseRadio label="Default Radio" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Checked Radio" checked readOnly />
            </div>
          </div>

          <div>
            <p className="text-heading">Disabled Radio</p>
            <div className="mt-4">
              <BaseRadio label="Default Radio" disabled={true} />
            </div>
            <div className="mt-4">
              <BaseRadio label="Checked Radio" checked readOnly disabled={true} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-nav-header p-6">
        <h1 className="text-heading">Custom Radios</h1>
        <div className="mt-3 grid grid-cols-3 gap-x-5 gap-y-5">
          <div>
            <p className="text-heading">Filled Radio</p>
            <div className="mt-4">
              <BaseRadio label="Radio Primary" checked readOnly />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Secondary" checked readOnly color="secondary" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Info" checked readOnly color="info" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Success" checked readOnly color="success" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Warning" checked readOnly color="warning" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Danger" checked readOnly color="danger" />
            </div>
          </div>

          <div>
            <p className="text-heading">Outlined Radio</p>
            <div className="mt-4">
              <BaseRadio label="Radio Primary" checked variant="outlined" readOnly />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Secondary" checked variant="outlined" readOnly color="secondary" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Info" checked variant="outlined" readOnly color="info" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Success" checked variant="outlined" readOnly color="success" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Warning" checked variant="outlined" readOnly color="warning" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Danger" checked variant="outlined" readOnly color="danger" />
            </div>
          </div>

          <div>
            <p className="text-heading">Soft Radio</p>
            <div className="mt-4">
              <BaseRadio label="Radio Primary" checked soft readOnly />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Secondary" checked soft readOnly color="secondary" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Info" checked soft readOnly color="info" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Success" checked soft readOnly color="success" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Warning" checked soft readOnly color="warning" />
            </div>
            <div className="mt-4">
              <BaseRadio label="Radio Danger" checked soft readOnly color="danger" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckboxesRadios
