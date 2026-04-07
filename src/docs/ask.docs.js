/**
 * @swagger
 * tags:
 *   name: Ask
 *   description: RAG Q&A API
 */

/**
 * @swagger
 * /api/ask:
 *   post:
 *     summary: Ask a question
 *     tags: [Ask]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             question: What is refund policy?
 *     responses:
 *       200:
 *         description: Answer response
 */