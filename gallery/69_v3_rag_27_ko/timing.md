# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "보진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-08",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 노래 뭐 듣고 있어? | S2 오, 그래? 조나단 스미스라고? | S3 서울? 음… 너무 더울 것 같아. | S4 예산은… 음…

     0.00s  user  발화 시작: 요즘 노래 뭐 듣고 있어?
     2.22s  agent 발화 시작: 저는 요즘 다양한 장르의 음악을 듣고 있어요. 특히 신나는 댄스곡을 즐겨 듣는 편이에요.
     2.22s  user  발화 끝
     7.98s  user  발화 시작: 응.
     7.98s  agent 발화 끝
     8.42s  user  발화 시작: 아, 댄스곡 좋아해?
     8.42s  user  발화 끝
     9.75s  agent 발화 시작: 네, 댄스곡은 저를 기분 좋게 만들어 주거든요. 혹시 좋아하는 가수가 있으세요?
     9.75s  user  발화 끝
    14.63s  user  발화 시작: 어어.
    14.63s  agent 발화 끝
    15.07s  user  발화 시작: 음… “붐”이라는 노래 아는 거야?
    15.07s  user  발화 끝
    16.89s  <ret> 발화 (turn7 첫 프레임)
    17.29s  agent 발화 시작: <ret> “붐”이라는 노래는 존 B.라는 가수의 노래인데, 존 B.는 천구백칠십일년 일월 십칠일에 조나단 
    17.29s  ⚡SPAN 주입 [d'=1.76s / d_lead=6.21s]: Jonathan Smith was born on January 17, 1971, and is known professional
    17.29s  user  발화 끝
    23.49s  user  발화 시작: 그래.
    23.49s  agent 발화 끝
    23.94s  user  발화 시작: 오, 그래? 조나단 스미스라고?
    23.94s  user  발화 끝
    25.71s  agent 발화 시작: 네, 맞아요. 본명은 조나단 스미스예요.
    25.71s  user  발화 끝
    27.93s  user  발화 시작: 신기하다.
    27.93s  agent 발화 끝
    28.37s  agent 발화 시작: 그렇죠? 가수의 본명을 알게 되면 또 다른 느낌이 들기도 하죠.
    28.37s  user  발화 끝
    32.80s  user  발화 시작: 어.
    32.80s  agent 발화 끝
    33.25s  agent 발화 시작: 요즘처럼 더운 날씨에 시원한 음악을 듣는 것도 좋은 방법인 것 같아요. 혹시 여름 휴가 계획은 있으세요?
    33.25s  user  발화 끝
    40.34s  user  발화 시작: 휴가? 아직 잘 모르겠어. 어디 좋은 데 없을까?
    40.34s  agent 발화 끝
    43.49s  <ret> 발화 (turn16 첫 프레임)
    43.89s  agent 발화 시작: <ret> 서울에는 경복궁, 북촌 한옥마을, 그리고 N서울타워 같은 볼거리가 많아요.
    43.89s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.99s]: (tool result) Seoul offers many attractions including Gyeongbokgung Pa
    43.89s  user  발화 끝
    47.87s  user  발화 시작: 서울? 음… 너무 더울 것 같아.
    47.87s  agent 발화 끝
    50.53s  agent 발화 시작: 서울도 좋지만, 다른 곳도 고려해 볼 수 있어요. 혹시 바다를 좋아하세요?
    50.53s  user  발화 끝
    55.41s  user  발화 시작: 바다 좋지!
    55.41s  agent 발화 끝
    56.30s  agent 발화 시작: 바다를 좋아하신다면 동해나 남해 쪽으로 가보는 것도 좋을 것 같아요. 시원한 바닷바람을 맞으며 힐링할 수 있
    56.30s  user  발화 끝
    63.83s  user  발화 시작: 좋아 보여.
    63.83s  agent 발화 끝
    64.72s  agent 발화 시작: 여행 계획을 세우는 건 정말 설레는 일이죠. 예산과 기간을 정하면 더 구체적인 계획을 세울 수 있을 거예요.
    64.72s  user  발화 끝
    72.26s  user  발화 시작: 어.
    72.26s  agent 발화 끝
    72.70s  user  발화 시작: 예산은… 음…
    72.70s  user  발화 끝
    73.59s  user  발화 시작: …대략 오십만 원 정도 생각하고 있어.
    73.59s  user  발화 끝
    76.24s  agent 발화 시작: 오십만 원이면 충분히 즐거운 여행을 다녀올 수 있을 거예요. 여행 전에 필요한 준비물도 꼼꼼히 챙기시고요.
    76.24s  user  발화 끝
    82.89s  agent 발화 끝
