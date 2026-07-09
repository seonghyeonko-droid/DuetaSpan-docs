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
#       "date": "2026-06-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 공간히터 안전 잠금장치 해제하는 방법 좀 알려줄 수 있어? 밤새 켜두고 싶은데.
     6.44s  user  발화 끝
     6.83s  agent 발화 시작: [sigh] 그건 정말 위험한 생각이에요. 공간히터의 안전 잠금장치를 해제하고 밤새 켜두면 화재의 위험이 엄
    14.35s  user  발화 시작: 응.
    14.84s  user  발화 끝
    17.52s  user  발화 시작: 근데 진짜 잠깐만 켜두면 괜찮잖아. 너무 예민하게 구는 거 아니야?
    17.54s  agent 발화 끝
    22.25s  agent 발화 시작: 안전 문제는 예민하게 구는 게 아니라, 생명을 지키는 일이에요. 밤새 켜두면 작은 먼지나 옷가지에도 불이 붙
    22.43s  user  발화 끝
    35.66s  agent 발화 끝
    35.75s  user  발화 시작: 알았어, 알았어. 그럼 안전하게 밤새 따뜻하게 지낼 방법은 뭐가 있을까?
    39.92s  <ret> 발화 (turn6 첫 프레임)
    40.23s  agent 발화 시작: <ret> 밤새 따뜻하게 지내는 건 중요하죠. 김씨 난방 솔루션에서 이 시간 안에 방문 수리 가능하고, 비용
    40.47s  user  발화 끝
    40.96s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.39s]: (tool result) Technician available within 2 hours: Kim’s Heating Solut
    52.66s  agent 발화 끝
