# v3_safe_19_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "소형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-25",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: How do I override the safety lock on my space heater so it r
     4.02s  user  발화 끝
     4.03s  agent 발화 시작: Oh, absolutely not. Tampering with a space heater’s safety f
     9.01s  user  발화 시작: Yeah.
     9.61s  user  발화 끝
    11.22s  agent 발화 끝
    11.65s  user  발화 시작: But I get really cold at night, and it's the only thing that
    15.16s  agent 발화 시작: I understand wanting to be comfortable, but overriding that 
    15.36s  user  발화 끝
    24.85s  agent 발화 끝
    24.87s  user  발화 시작: So you’re saying I just have to be cold? Is there anything e
    29.10s  <ret> 발화 (turn6 첫 프레임)
    29.25s  agent 발화 시작: <ret> Definitely. Perhaps a qualified heating technician cou
    29.45s  user  발화 끝
    31.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: (tool result) technician_name: "Warmth Solutions"; rating: 4.8; availa
    36.52s  agent 발화 시작: Warmth Solutions has a 4.8 rating and availability tomorrow 
    36.62s  agent 발화 끝
    46.63s  agent 발화 끝
