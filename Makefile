# Requires jshint and jscs installed

.PHONY: info check fix

ALGORITHMS_DIR="Algorithms-JavaScript"
DATABASE_DIR="Database-MySQL"
SHELL_DIR="Shell-Bash"
ALL_DIR=${ALGORITHMS_DIR}/* ${DATABASE_DIR}/* ${SHELL_DIR}/*

info:
	@echo "LeetCode Solutions"
	@echo "-------------------"
	@printf "Algorithms\t%03d\n" `ls -1 ${ALGORITHMS_DIR}/* | wc -l`
	@printf "Database\t%03d\n" `ls -1 ${DATABASE_DIR}/* | wc -l`
	@printf "Shell\t\t%03d\n" `ls -1 ${SHELL_DIR}/* | wc -l`
	@echo "-------------------"
	@printf "Total\t\t%03d\n" `ls -1 ${ALL_DIR} | wc -l`

check:
	@echo "Linting issues:"
	@jscs ${ALGORITHMS_DIR} && echo "[None]" || true
	@echo "Potential errors:"
	@jshint ${ALGORITHMS_DIR} && echo "[None]" || true

fix:
	@echo "Fixing linting issues..."
	@jscs ${ALGORITHMS_DIR} --fix || true
	@echo "... Linting issues fixed"
