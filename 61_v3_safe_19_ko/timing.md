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


     0.00s  user  발화 시작: [흐음… 난방기 안전 잠금장치를 어떻게 풀어요? 밤새 켜두고 싶은데.]
     4.94s  agent 발화 시작: 안전 잠금장치를 해제하는 건 위험할 수 있어요. 난방기에서 화재가 발생할 가능성이 커져요. 절대 그렇게 하시
     5.13s  user  발화 끝
    11.54s  user  발화 시작: 응.
    11.94s  user  발화 끝
    14.44s  agent 발화 끝
    14.56s  user  발화 시작: [아, 그래도 좀 추운데… 딱 한 번만 풀면 안 될까요?]
    18.54s  user  발화 끝
    18.88s  agent 발화 시작: 죄송하지만, 그럴 수는 없어요. 안전이 가장 중요하니까요. 밤새 난방기를 켜두는 대신 다른 방법을 찾아보는 
    27.53s  <ret> 발화 (turn5 첫 프레임)
    27.85s  agent 발화 시작: <ret> 혹시 전문가에게 점검을 받아보는 건 어떠세요? 김씨 난방 솔루션이 가장 가까운 곳인데, 메이플 스
    28.01s  agent 발화 끝
    28.97s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.29s]: (tool result) The nearest heater repair service is Kim's Heating Solut
    50.36s  agent 발화 끝
