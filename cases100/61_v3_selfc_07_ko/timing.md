# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "예재",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-29",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "bloodtype",
#       "text": "User's blood type is AB-."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "work",
#       "text": "User works as a barista."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "skill",
#       "text": "User is a complete beginner at freediving."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-05-23",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-04-15",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-03-13",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 도쿄에서 십이월 일일부터 오일까지 해치백 렌트하고 싶은데.
     4.36s  user  발화 끝
     4.38s  <ret> 발화 (turn1 첫 프레임)
     4.72s  agent 발화 시작: <ret> 네, 물론이죠. 도쿄에서 해치백을 렌트하시는군요.
     5.47s  ⚡SPAN 주입 [d'=1.09s / d_lead=3.55s]: (tool result) (no information found)
     8.27s  agent 발화 시작: 죄송하지만, 해당 조건에 맞는 차량 정보를 찾을 수 없었습니다.
     8.27s  agent 발화 끝
    10.92s  user  발화 시작: 응.
    11.23s  user  발화 끝
    11.96s  agent 발화 끝
    13.29s  user  발화 시작: 아, 십이월 일일이 아니라 십이월 이십일일로— 아니, 이십사일로 해 줘.
    18.63s  <ret> 발화 (turn5 첫 프레임)
    19.07s  agent 발화 시작: <ret> [happy] 네, 알겠습니다. 십이월 이십사일로 다시 확인해 볼게요.
    19.13s  user  발화 끝
    19.71s  ⚡SPAN 주입 [d'=1.08s / d_lead=4.00s]: (tool result) (no information found)
    22.99s  agent 발화 시작: 죄송합니다. 십이월 이십사일부터 이십팔일까지 해치백 렌트 정보도 찾을 수 없습니다.
    23.07s  agent 발화 끝
    25.09s  user  발화 시작: 응.
    25.51s  user  발화 끝
    28.93s  agent 발화 시작: 혹시 다른 차종을 고려해 보시겠어요? 아니면 날짜를 조금 조정해 볼까요?
    29.05s  agent 발화 끝
    33.74s  agent 발화 끝
