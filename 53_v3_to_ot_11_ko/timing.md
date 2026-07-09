# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Toaira",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-26",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 노히트 게임을 당한 게 언제였는지 아세요?
     4.54s  <ret> 발화 (turn1 첫 프레임)
     4.77s  agent 발화 시작: <ret> 음, 야구 관련 기록은 꽤 잘 알고 있어요. 오클랜드 애슬레틱스를 상대로 한 마지막 노히트 게임은
     4.86s  user  발화 끝
     5.82s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.71s]: [source: Baseball-Reference.com] The last no-hitter against the Oaklan
    13.37s  user  발화 시작: 잠깐만, 아까 그 얘기는… 아, 죄송해요.
    13.58s  agent 발화 끝
    16.14s  user  발화 시작: 아, 죄송합니다. 다시 질문드릴게요. 그 날 누가 던졌는지도 알 수 있을까요?
    16.28s  user  발화 끝
    20.79s  <ret> 발화 (turn4 첫 프레임)
    21.10s  agent 발화 시작: <ret> 십팔년 사월 이십일 일에 제임스 팩스턴 선수가 오클랜드 애슬레틱스를 상대로 노히트 게임을 던졌어요
    21.18s  user  발화 끝
    22.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.53s]: (tool result) James Paxton pitched a no-hitter against the Oakland Ath
    26.09s  user  발화 시작: 맞아요.
    26.91s  user  발화 끝
    27.60s  agent 발화 시작: 혹시 다른 궁금한 야구 기록이 있으신가요?
    27.63s  agent 발화 끝
    30.74s  agent 발화 끝
