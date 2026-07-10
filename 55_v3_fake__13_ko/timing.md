# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "노빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데미 로바토의 새 앨범이 언제 나오나요, 이천십오년에? | S2 ‘Skyscraper’를 가장 좋아해요. | S3 …그 앨범에 수록된 다른 곡들도 궁금해요. | S4 맞아요, 저도 그래요.

     0.00s  user  발화 시작: 데미 로바토의 새 앨범이 언제 나오나요, 이천십오년에?
     4.72s  user  발화 끝
     4.95s  <ret> 발화 (turn1 첫 프레임)
     5.11s  agent 발화 시작: <ret> 이천십오년 십월에 새 앨범이 발매될 예정입니다. 혹시 데미 로바토의 다른 앨범에 대해서도 궁금하신
     6.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: October 2015.
    11.79s  user  발화 시작: 아, 네.
    11.83s  agent 발화 끝
    12.34s  agent 발화 시작: 데미 로바토는 다양한 장르를 소화하는 가수로 유명하죠. 그녀의 음악 스타일은 어떻게 생각하시나요?
    12.48s  user  발화 끝
    18.29s  user  발화 시작: 음, 저는 그녀의 발라드 스타일을 좋아해요.
    18.36s  agent 발화 끝
    21.43s  agent 발화 시작: 발라드 스타일을 좋아하시는군요. 감성적인 가사와 멜로디가 특징이죠. 혹시 특별히 좋아하는 곡이 있으신가요?
    21.48s  user  발화 끝
    26.93s  user  발화 시작: 음.
    27.57s  user  발화 끝
    29.58s  agent 발화 끝
    31.94s  user  발화 시작: ‘Skyscraper’를 가장 좋아해요.
    34.20s  <ret> 발화 (turn8 첫 프레임)
    34.25s  user  발화 끝
    34.44s  agent 발화 시작: <ret> 죄송하지만, ‘Skyscraper’에 대한 추가 정보는 찾을 수 없었습니다. 다른 곡에 대해서도 
    36.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.69s]: (no information found)
    40.13s  agent 발화 끝
    41.10s  user  발화 시작: 다른 곡도 괜찮아요.
    42.70s  user  발화 끝
    42.86s  agent 발화 시작: 그녀의 다른 인기곡으로는 ‘Sorry Not Sorry’나 ‘Heart Attack’이 있습니다. 들어보신 
    47.85s  agent 발화 끝
    48.21s  user  발화 시작: ‘Heart Attack’도 좋아요.
    49.59s  user  발화 끝
    49.88s  agent 발화 시작: ‘Heart Attack’도 좋아하시는군요. 그 곡은 이천십삼년에 발매되었는데, 당시 큰 인기를 끌었습니다—
    55.77s  user  발화 시작: …그 앨범에 수록된 다른 곡들도 궁금해요.
    56.36s  agent 발화 끝
    59.47s  user  발화 끝
    59.67s  agent 발화 시작: 아, 이천십삼년 앨범에 수록된 다른 곡들이 궁금하시군요. ‘Made to Love You’나 ‘In Case
    62.82s  user  발화 시작: 예.
    63.22s  user  발화 끝
    66.94s  agent 발화 끝
    67.09s  user  발화 시작: 오, ‘In Case You Forgot’도 듣고 싶네요.
    70.23s  user  발화 끝
    70.30s  agent 발화 시작: ‘In Case You Forgot’은 강렬한 가사와 퍼포먼스가 인상적인 곡입니다. 뮤직비디오도 꼭 한번 보
    77.58s  agent 발화 끝
    77.74s  user  발화 시작: 알겠습니다. 뮤직비디오도 볼게요.
    80.21s  <ret> 발화 (turn19 첫 프레임)
    80.41s  user  발화 끝
    80.44s  agent 발화 시작: <ret> 데미 로바토의 음악은 많은 사람들에게 영감을 주죠. 그녀의 음악을 통해 위로를 받거나 공감하는 분
    82.21s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.74s]: The capital of Australia is Canberra.
    83.16s  user  발화 시작: 네.
    83.75s  user  발화 끝
    88.07s  user  발화 시작: 맞아요, 저도 그래요.
    88.18s  agent 발화 끝
    89.63s  user  발화 끝
    89.69s  agent 발화 시작: 그녀의 음악이 당신에게 어떤 의미를 가지는지 궁금하네요. 혹시 음악을 통해 얻는 특별한 경험이 있으신가요?
    94.97s  user  발화 시작: 네.
    95.65s  user  발화 끝
    96.56s  user  발화 시작: 음악은 제 삶의 큰 부분이에요.
    96.59s  agent 발화 끝
    99.05s  agent 발화 시작: 음악이 삶의 큰 부분이라는 말씀, 정말 공감됩니다. 음악은 우리의 감정을 표현하고 치유하는 힘을 가지고 있죠
    99.10s  user  발화 끝
   104.36s  user  발화 시작: 맞아요.
   105.18s  user  발화 끝
   107.08s  user  발화 시작: 네, 정말 그래요.
   107.12s  agent 발화 끝
   108.33s  agent 발화 시작: 데미 로바토의 음악과 함께 더욱 행복하고 즐거운 시간을 보내시길 바랍니다.
   108.46s  user  발화 끝
   112.82s  agent 발화 끝
