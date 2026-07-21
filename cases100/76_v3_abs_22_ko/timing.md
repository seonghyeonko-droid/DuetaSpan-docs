# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "성아",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "pet",
#       "text": "User has a Bengal cat named Tiger."
#     },
#     {
#       "date": "2026-06-15",
#       "category": "partner",
#       "text": "User's partner is named Hana."
#     },
#     {
#       "date": "2026-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Lebanese."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "phone",
#       "text": "User uses a Pixel 8."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "child",
#       "text": "User has a child named Daniel, age 14."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "emergency",
#       "text": "User's emergency contact is Leo."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "show",
#       "text": "User is currently watching a nature documentary series."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-17",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-06-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-06-04",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 세균들은 어떻게 지내고 있나요? | S2 네, 조금요. 어떤 걸 잘하는지 잘 모르겠어요. | S3 맞아요, 사람들과 대화하는 걸 좋아해요. | S4 아, 수치로요?

     0.00s  user  발화 시작: 요즘 세균들은 어떻게 지내고 있나요?
     2.10s  <ret> 발화 (turn1 첫 프레임)
     2.52s  user  발화 끝
     2.58s  agent 발화 시작: <ret> 그 질문에 대한 정보는 아직 찾을 수 없네요.
     3.27s  ⚡SPAN 주입 [d'=1.17s / d_lead=3.05s]: (no information found)
     3.49s  user  발화 시작: 아.
     3.88s  user  발화 끝
     5.62s  agent 발화 끝
     6.08s  user  발화 시작: 아, 그렇군요.
     7.19s  user  발화 끝
     7.40s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요?
     9.64s  user  발화 시작: 아니요, 괜찮습니다.
     9.70s  agent 발화 끝
    11.43s  agent 발화 시작: 혹시 이직을 고민하고 계신가요?
    11.44s  user  발화 끝
    13.64s  agent 발화 끝
    13.87s  user  발화 시작: 네, 조금요. 어떤 걸 잘하는지 잘 모르겠어요.
    17.29s  user  발화 끝
    17.34s  agent 발화 시작: 어떤 일을 해보셨는지 말씀해 주시겠어요?
    20.10s  agent 발화 끝
    20.20s  user  발화 시작: 음… 마케팅이랑 고객 지원을 주로 했어요.
    23.04s  <ret> 발화 (turn10 첫 프레임)
    23.22s  agent 발화 시작: <ret> 마케팅과 고객 지원 경험이 있으시군요.
    23.31s  user  발화 끝
    23.92s  ⚡SPAN 주입 [d'=0.88s / d_lead=3.00s]: Transferable skills are abilities and talents developed in one role th
    26.22s  agent 발화 끝
    26.22s  agent 발화 시작: 다른 역할에서도 활용할 수 있는 기술들이 있을 거예요. 의사소통, 문제 해결, 팀워크, 리더십 등이 대표적이
    29.16s  user  발화 시작: 네.
    29.60s  user  발화 끝
    34.12s  agent 발화 시작: 고객 지원 경험은 의사소통 능력을 키우는 데 도움이 되었을 거예요.
    34.14s  agent 발화 끝
    38.72s  agent 발화 끝
    38.98s  user  발화 시작: 맞아요, 사람들과 대화하는 걸 좋아해요.
    42.31s  agent 발화 시작: 좋아하시는군요. 마케팅 경험은 문제 해결 능력을 향상시켰을 거예요.
    42.34s  user  발화 끝
    46.26s  user  발화 시작: 예.
    46.75s  user  발화 끝
    47.77s  agent 발화 끝
    47.99s  user  발화 시작: 음, 맞는 것 같아요. 분석하는 걸 좋아하거든요.
    51.31s  user  발화 끝
    51.63s  agent 발화 시작: 분석을 좋아하시는군요. 두 경험 모두 훌륭한 강점이에요.
    56.77s  <ret> 발화 (turn19 첫 프레임)
    56.99s  agent 발화 시작: <ret> 이력서 작성에 도움이 될 만한 조언을 드릴까요? 간결하고 읽기 쉬운 형식으로 기술과 경험을 강조하
    56.99s  agent 발화 끝
    57.89s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.53s]: A well-written resume should highlight your skills and experience in a
    68.07s  agent 발화 끝
    68.51s  user  발화 시작: 네, 알려주세요.
    69.78s  user  발화 끝
    69.80s  agent 발화 시작: 성과를 구체적인 수치로 표현하면 더욱 효과적이에요.
    70.93s  user  발화 시작: 그렇죠.
    71.52s  user  발화 끝
    73.64s  agent 발화 끝
    75.20s  user  발화 시작: 아, 수치로요?
    76.28s  user  발화 끝
    76.65s  agent 발화 시작: 네, 예를 들어 “고객 만족도 십오퍼센트 향상”처럼요.
    81.06s  user  발화 시작: 팁 감사합니다.
    81.09s  agent 발화 끝
    82.39s  user  발화 끝
