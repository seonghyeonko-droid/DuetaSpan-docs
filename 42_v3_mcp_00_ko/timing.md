# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "세희",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "floor",
#       "text": "User lives on the 5th floor."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "dislike",
#       "text": "User can't stand olives."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "child",
#       "text": "User has a child named Sofia, age 9."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "employer",
#       "text": "User works at a regional bank."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "phone",
#       "text": "User uses an iPhone 15."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2025-12-22",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 뉴욕에서 볼 만한 공연이 있을까요?
     2.51s  <ret> 발화 (turn1 첫 프레임)
     2.67s  agent 발화 시작: <ret> 뉴욕에는 브로드웨이 극장 같은 볼 만한 공연장이 많고, 티켓 가격은 공연과 좌석에 따라 육십구달러
     2.67s  user  발화 끝
     3.15s  ⚡SPAN 주입 [d'=0.64s / d_lead=8.53s]: New York City has many theaters, including the Broadway Theatre, which
    11.20s  user  발화 시작: 아.
    11.20s  agent 발화 끝
    11.73s  user  발화 시작: 음, 좀 더 저렴한 곳도 있을까요?
    11.73s  user  발화 끝
    14.51s  <ret> 발화 (turn4 첫 프레임)
    14.93s  agent 발화 시작: <ret> 루실 로르텔 극장에서는 삼십오달러부터 시작하는 저렴한 오프 브로드웨이 공연을 볼 수 있고, 여름에
    14.93s  user  발화 끝
    15.78s  ⚡SPAN 주입 [d'=1.27s / d_lead=10.13s]: (tool result) The Lucille Lortel Theatre offers off-Broadway productio
    25.06s  user  발화 시작: 음.
    25.06s  agent 발화 끝
    25.59s  user  발화 시작: 셰익스피어 공연이 무료라고요? 언제 해요?
    25.59s  user  발화 끝
    28.26s  agent 발화 시작: 네, 그렇습니다. 퍼블릭 극장에서 여름에 무료 셰익스피어 공연을 합니다.
    28.26s  user  발화 끝
    33.06s  agent 발화 끝
