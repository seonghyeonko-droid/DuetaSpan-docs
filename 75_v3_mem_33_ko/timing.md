# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "성호",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 성호님. 저는 도라로입니다. 오늘 하루 잘 보내셨는지 궁금하네요.
     3.92s  user  발화 시작: 안녕하세요, 도라로 씨. 지금 시간 알려주실 수 있나요?
     3.92s  agent 발화 끝
     7.32s  <ret> 발화 (turn2 첫 프레임)
     7.40s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 두시 삼십육분입니다. 부산에서는 지금 해가 뉘엿뉘엿 지
     7.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.09s]: (tool result) It is Friday, July 10, 2026 at 2:36 PM in Asia/Seoul rig
     7.40s  user  발화 끝
    13.50s  user  발화 시작: 네.
    13.50s  agent 발화 끝
    13.93s  user  발화 시작: 아, 그렇군요. 제가 발효 식품에 관심 있는 거 기억하시죠?
    13.93s  user  발화 끝
    17.61s  <ret> 발화 (turn5 첫 프레임)
    17.85s  agent 발화 시작: <ret> 네, 이천이십육년 오월 칠일에 발효 식품에 관심이 많다고 말씀하셨었죠.
    17.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.92s]: [2026-05-07] User is into home fermentation.
    17.85s  user  발화 끝
    21.77s  user  발화 시작: 네.
    21.77s  agent 발화 끝
    22.20s  user  발화 시작: 혹시 집에서 쉽게 만들 수 있는 발효 식품 레시피 같은 거 있을까요?
    22.20s  user  발화 끝
    27.43s  agent 발화 시작: 집에서 쉽게 만들 수 있는 발효 식품이라… 혹시 어떤 종류를 생각하고 계신가요?
    27.43s  user  발화 끝
    32.65s  agent 발화 끝
