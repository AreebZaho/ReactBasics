import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

export function FilesystemItem({ node }) {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<li key={node.name}>
			<span className="flex items-center gap-1.5 py-1">
				{node.nodes && node.nodes.length > 0 && (
					<button onClick={() => setIsOpen(!isOpen)} className="p-1 -m-1">
						<motion.span
							animate={{ rotate: isOpen ? 90 : 0 }}
							transition={{ type: "spring", bounce: 0, duration: 0.4 }}
							className="flex">
							<ChevronRightIcon className="text-gray-500 size-4" />
						</motion.span>
					</button>
				)}

				{node.nodes ? (
					<FolderIcon
						className={`size-6 text-sky-500 ${
							node.nodes.length === 0 ? "ml-[22px]" : ""
						}`}
					/>
				) : (
					<DocumentIcon className="ml-[22px] size-6 text-gray-900" />
				)}
				{node.name}
			</span>

			<AnimatePresence>
				{isOpen && (
					<motion.ul
						initial={{ height: 0 }}
						animate={{ height: "auto" }}
						exit={{ height: 0 }}
						transition={{ type: "spring", bounce: 0, duration: 0.4 }}
						className="flex flex-col justify-end pl-6 overflow-hidden">
						{node.nodes?.map((node) => (
							<FilesystemItem node={node} key={node.name} />
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</li>
	);
}

FilesystemItem.propTypes = {
	node: PropTypes.shape({
		name: PropTypes.string.isRequired,
		nodes: PropTypes.arrayOf(PropTypes.object),
	}).isRequired,
};
