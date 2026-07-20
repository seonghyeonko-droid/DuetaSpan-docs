# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "윤우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     },
#     {
#       "date": "2026-05-30",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "music",
#       "text": "User likes listening to 90s hip-hop."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "sibling",
#       "text": "User has a younger sibling named Noah."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "commute",
#       "text": "User drives about 40 minutes each way."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "plant",
#       "text": "User is growing basil on the windowsill at home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-04",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-02-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 바레풋 인 더 파크……
     1.61s  user  발화 끝
     2.79s  user  발화 시작: …브로드웨이에서 누가 연기했는지 궁금한데…
     4.58s  agent 발화 시작: 그렇죠.
     5.53s  <ret> 발화 (turn3 첫 프레임)
     5.73s  agent 발화 끝
     5.91s  agent 발화 시작: <ret> 천구백육십삼년 브로드웨이 초연에서 엘리자베스 애슐리가 출연했어요. 정말 대단한 배우죠.
     5.96s  user  발화 끝
     6.79s  ⚡SPAN 주입 [d'=1.26s / d_lead=9.04s]: Elizabeth Ashley starred in the original 1963 Broadway production of B
    11.88s  user  발화 시작: 예.
    12.50s  user  발화 끝
    14.96s  agent 발화 끝
    15.75s  user  발화 시작: 아, 엘리자베스 애슐리! …그녀가 다른 작품에도 출연했나요?
    20.33s  user  발화 끝
