# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "태담",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 너무 힘들어요. 뭔가 변화가 필요할 것 같아요. | S2 작은 거요? 예를 들면 뭘요? | S3 아, 그렇군요. 천구백팔십육년이네요. | S4 오, 인사이드 아웃 이 좋네요.

     0.00s  user  발화 시작: 요즘 너무 힘들어요. 뭔가 변화가 필요할 것 같아요.
     4.29s  agent 발화 시작: 변화를 꿈꾸시는군요. 새로운 시작을 응원할게요. 어떤 변화를 생각하고 계신가요?
     4.29s  user  발화 끝
     9.12s  user  발화 시작: 그래.
     9.12s  agent 발화 끝
     9.66s  user  발화 시작: 글쎄요… 뭐부터 시작해야 할지 모르겠어요.
     9.66s  user  발화 끝
    12.34s  agent 발화 시작: 막막하게 느껴지시는 마음, 충분히 이해해요. 작은 것부터 시작해보는 건 어떠세요?
    12.34s  user  발화 끝
    17.71s  user  발화 시작: 작은 거요? 예를 들면 뭘요?
    17.71s  agent 발화 끝
    20.39s  agent 발화 시작: 새로운 취미를 시작하거나, 평소에 가보고 싶었던 곳을 방문해보는 것도 좋겠네요.
    20.39s  user  발화 끝
    25.76s  user  발화 시작: 응.
    25.76s  agent 발화 끝
    26.29s  user  발화 시작: 아, 맞다. 위스콘신에서 술 마시는 나이가 언제 이십일세로 바뀌었는지 궁금하네요.
    26.29s  user  발화 끝
    31.58s  <ret> 발화 (turn9 첫 프레임)
    31.66s  agent 발화 시작: <ret> 위스콘신에서 술 마시는 나이가 이십일세로 바뀐 건, 천구백팔십사년 전국 최저 음주 연령법에 발맞춰
    31.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: On September 1, 1986, Wisconsin raised its drinking age to 21, alignin
    31.66s  user  발화 끝
    42.93s  user  발화 시작: 아.
    42.93s  agent 발화 끝
    43.47s  user  발화 시작: 아, 그렇군요. 천구백팔십육년이네요.
    43.47s  user  발화 끝
    45.08s  agent 발화 시작: 맞아요. 새로운 사실을 알아가는 것도 변화의 시작이 될 수 있답니다.
    45.08s  user  발화 끝
    50.44s  user  발화 시작: 이번 주 토요일에 영화 보러 갈까요? 혹시 괜찮은 영화 있어요?
    50.44s  agent 발화 끝
    55.73s  <ret> 발화 (turn14 첫 프레임)
    55.81s  agent 발화 시작: <ret> 이번 주 토요일에 영화 보시는군요! 씨 지 브이 강남에서 '인사이드 아웃 이'가 오후 두시, 다섯
    55.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.34s]: (tool result) Showing: "Inside Out 2" (PG) - 2:00 PM, 5:30 PM, 8:00 PM
    55.81s  user  발화 끝
    68.15s  user  발화 시작: 대박.
    68.15s  agent 발화 끝
    68.69s  user  발화 시작: 오, 인사이드 아웃 이 좋네요.
    68.69s  user  발화 끝
    71.37s  agent 발화 시작: [happy] 좋은 선택이에요! 마음껏 웃고 즐기다 오세요.
    71.37s  user  발화 끝
    75.13s  user  발화 시작: 혹시 내일 날씨 어때요?
    75.13s  agent 발화 끝
    76.87s  <ret> 발화 (turn19 첫 프레임)
    77.27s  agent 발화 시작: <ret> 내일 서울 날씨는 이십팔 점 오도, 습도는 육십오퍼센트, 바람은 시속 사 점 이킬로미터로, 부분적
    77.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.34s]: (tool result) Weather in Seoul: 28.5°C, humidity 65%, wind 4.2 km/h, p
    77.27s  user  발화 끝
    89.61s  agent 발화 끝
