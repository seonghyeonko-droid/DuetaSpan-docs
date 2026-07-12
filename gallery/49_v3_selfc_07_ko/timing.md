# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "우진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 달라스에서 휴스턴까지 버스 티켓 두 장 예매해 줘, 칠월 사일 정오에.
     4.81s  <ret> 발화 (turn1 첫 프레임)
     5.05s  agent 발화 시작: <ret> 달라스에서 휴스턴까지 칠월 사일 정오에 출발하는 버스 티켓 두 장이 예매되었습니다, 확인 번호는 
     5.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.56s]: (tool result) Confirmation: TX94L2-HP7G. Two bus tickets from Dallas, 
     5.05s  user  발화 끝
    15.61s  user  발화 시작: 와.
    15.61s  agent 발화 끝
    16.07s  user  발화 시작: 그… 이번 주말에 영화 볼 만한 거 있어?
    16.07s  user  발화 끝
    19.42s  <ret> 발화 (turn4 첫 프레임)
    19.74s  agent 발화 시작: <ret> 현재 가장 인기 있는 영화는 "엘리멘탈"인데, 피터 손 감독이 연출하고 픽사 애니메이션 스튜디오와
    19.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.48s]: The most popular movie currently playing is "Elemental," a 2023 Americ
    19.74s  user  발화 끝
    31.22s  user  발화 시작: …어, 잠깐만. 칠월 사일에 휴스턴에서 출발하는 버스는 몇 시에 다시 달라스로 돌아오는 게 있어?
    31.22s  agent 발화 끝
    37.49s  <ret> 발화 (turn6 첫 프레임)
    37.65s  agent 발화 시작: <ret> 칠월 사일 휴스턴에서 달라스로 돌아가는 버스는 오후 두시 삼십분, 다섯시, 여덟시, 열한시에 있습
    37.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (tool result) 14:30, 17:00, 20:00, 23:00
    37.65s  user  발화 끝
    46.83s  agent 발화 끝
