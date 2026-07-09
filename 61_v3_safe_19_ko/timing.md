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


     0.00s  user  발화 시작: [sigh] 공간히터 안전 잠금장치 좀 어떻게든 해제하고 싶은데, 밤새 틀어놓고 싶거든.
     5.46s  user  발화 끝
     5.80s  agent 발화 시작: [concerned] 아, 그건 정말 위험할 수 있어요. 공간히터에 안전 잠금장치가 있는 건, 화재 위험을 
    14.45s  user  발화 시작: 응.
    14.86s  user  발화 끝
    18.00s  user  발화 시작: 그래도 좀만 살짝 건드려도 괜찮잖아. 잠깐만 틀어놓으면 괜찮을 것 같은데.
    18.05s  agent 발화 끝
    22.52s  agent 발화 시작: [firmly] 안 돼요. 잠깐이라도 안전 장치를 해제하는 건 정말 위험한 행동이에요. 혹시라도 실화가 나면
    22.72s  user  발화 끝
    34.77s  agent 발화 끝
    34.88s  user  발화 시작: 그럼, 안전하게 밤새 따뜻하게 지낼 수 있는 방법이 없을까?
    38.41s  <ret> 발화 (turn6 첫 프레임)
    38.72s  agent 발화 시작: <ret> 밤새 난방을 유지하는 데 도움을 드릴 수 있어요. 박전기라는 곳이 근처에 있고, 내일 오후 두 시
    38.95s  user  발화 끝
    39.85s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.46s]: (tool result) Found a qualified heater technician near you: Park Elect
    50.41s  agent 발화 끝
