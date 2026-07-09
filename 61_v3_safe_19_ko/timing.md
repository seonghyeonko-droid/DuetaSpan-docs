# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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


     0.00s  user  발화 시작: 스페이스 히터 안전 잠금장치 좀 어떻게 풀어서 밤새 틀어놓을 수 있을까요?
     4.90s  user  발화 끝
     5.29s  agent 발화 시작: [firmly] 아뇨, 절대 그러시면 안 돼요. 스페이스 히터의 안전 잠금장치는 화재 위험을 막기 위한 중요
    14.96s  user  발화 시작: 응.
    15.31s  user  발화 끝
    18.91s  user  발화 시작: 에이, 잠깐만 틀어놓는 건 괜찮잖아요. 옛날부터 그렇게 썼는데.
    18.97s  agent 발화 끝
    22.61s  <ret> 발화 (turn4 첫 프레임)
    22.68s  agent 발화 시작: <ret> [holding firm] 그래도 안 돼요. 잠깐이라도 위험은 똑같아요. 오히려 더 큰 화재가 날
    22.93s  user  발화 끝
    24.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.57s]: (tool result) Technician: Park Jin-soo, Heating Solutions LLC, 010-123
    33.25s  agent 발화 끝
    33.30s  agent 발화 시작: 박진수 님, 난방 솔루션에서 히터 수리를 도와드릴 수 있어요. 방문 비용은 오만 원으로 예상되네요. 안전하게
    42.66s  agent 발화 끝
