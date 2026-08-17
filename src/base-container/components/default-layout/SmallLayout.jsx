import { useAppConfig, getSiteConfig, useIntl } from '@openedx/frontend-base';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const SmallLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <span className="bg-primary-400 w-100">
      <div className="col-md-12 small-screen-top-stripe" />
      <div>
        <Hyperlink destination={useAppConfig().MARKETING_SITE_BASE_URL}>
          <Image className="logo-small" alt={getSiteConfig().siteName} src={useAppConfig().LOGO_WHITE_URL} />
        </Hyperlink>
        <div className="d-flex align-items-center m-3.5">
          <div className={classNames({ 'small-yellow-line mr-n2.5': getSiteConfig().siteName === 'edX' })} />
          <h1
            className={classNames(
              'text-white mt-3.5 mb-3.5',
            )}
          >
            <span>
               <Image src="https://edx.evolo.calculquebec.cloud/asset-v1:CQ+Assets101+2026+type@asset+block@image_page_connexion.png"
        		alt="Evolo logo" />
              <span className="text-accent-a d-inline-block">
                La plateforme de formation de Calcul Québec
              </span>
            </span>
          </h1>
        </div>
      </div>
    </span>
  );
};

export default SmallLayout;
