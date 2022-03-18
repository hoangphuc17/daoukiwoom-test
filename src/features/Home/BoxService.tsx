import classNames from "classnames";
import { IBoxService } from "models/IHome";

const BoxService = (props: IBoxService) => {
  const { className = "", image, name, tags, i } = props;
  return (
    <div className={className}>
      <div
        className={classNames(
          "pt-[100px] pb-[75px] flex items-center justify-between max-w-[850px] mx-auto",
          {
            "flex-row-reverse": i % 2 !== 0,
          }
        )}
      >
        <img src={image} alt={name} className="w-[280px]" />
        <div className="text-center">
          <p className="font-secondary-bold text-[32px] leading-[43px] uppercase">
            {name}
          </p>
          <div className="flex flex-wrap justify-center max-w-[380px]">
            {tags.map((tag, index) => (
              <div
                className="text-center mt-4 mx-4"
                key={`tag-${name}-${index}`}
              >
                <p
                  className="text-k-done mb-4"
                  dangerouslySetInnerHTML={{ __html: tag.desc }}
                ></p>
                <span className="rounded-lg bg-k-darkblue text-white py-1 px-4">
                  {tag.tagName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoxService;
