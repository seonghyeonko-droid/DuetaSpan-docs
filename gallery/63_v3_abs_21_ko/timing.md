# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "현슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-04",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-28",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-11-26",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 사우스웨스턴 대학의 열아홉개 변수 프로그램 중에서 NCAA나  | S2 아, 그렇군요. 그럼 다른 학교는 어떨까요? 예를 들어, 예일 | S3 …아니요, 그냥 궁금해서요. 혹시 최근에 날씨는 어떤가요? | S4 고맙습니다. 혹시 오늘 저녁에 영화 볼 만한 거 추천해 주실 

     0.00s  user  발화 시작: 사우스웨스턴 대학의 열아홉개 변수 프로그램 중에서 NCAA나 볼 포스트시즌에 진출한 프로그램이 몇 개나 있었
     7.57s  <ret> 발화 (turn1 첫 프레임)
     7.81s  agent 발화 시작: <ret> 죄송하지만, 그 정보는 찾을 수 없었습니다. 사우스웨스턴 대학의 변수 프로그램 관련 포스트시즌 기
     7.81s  ⚡SPAN 주입 [d'=0.64s / d_lead=6.81s]: (no information found)
     7.88s  user  발화 끝
    14.62s  agent 발화 끝
    14.85s  user  발화 시작: 아, 그렇군요. 그럼 다른 학교는 어떨까요? 예를 들어, 예일 대학교는요?
    19.33s  user  발화 끝
    19.34s  agent 발화 시작: 예일 대학교에 대해서도 비슷한 정보를 찾으시는 건가요? 어떤 프로그램을 말씀하시는 건지 조금 더 구체적으로 
    25.23s  user  발화 시작: …아니요, 그냥 궁금해서요. 혹시 최근에 날씨는 어떤가요?
    25.83s  agent 발화 끝
    28.81s  <ret> 발화 (turn5 첫 프레임)
    29.13s  agent 발화 시작: <ret> 현재 온도는 이십삼°C이고, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터로 불고 있습니다.
    29.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    29.30s  user  발화 끝
    34.80s  user  발화 시작: 아.
    35.62s  user  발화 끝
    36.54s  agent 발화 끝
    36.64s  user  발화 시작: 고맙습니다. 혹시 오늘 저녁에 영화 볼 만한 거 추천해 주실 수 있나요?
    40.64s  agent 발화 시작: 어떤 장르를 좋아하시나요? 제가 취향에 맞는 영화를 찾아드릴게요.
    40.66s  user  발화 끝
    44.29s  agent 발화 끝
