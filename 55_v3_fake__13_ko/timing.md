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

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나와요? 이천십오년 기준으로요. | S2 팝 음악을 제일 좋아해요. | S3 맞아요, 저도 위로를 많이 받았어요. | S4 네, 정말 그런 것 같아요.

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와요? 이천십오년 기준으로요.
     4.12s  <ret> 발화 (turn1 첫 프레임)
     4.27s  agent 발화 시작: <ret> 데미 로바토의 새 앨범은 이천십오년 십월에 발매될 예정입니다. 혹시 다른 앨범에 대해서도 궁금하신
     4.35s  user  발화 끝
     6.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: October 2015.
    10.94s  agent 발화 끝
    11.37s  user  발화 시작: 아, 네. 그럼 그 앨범의 제목은 뭐예요?
    13.53s  <ret> 발화 (turn3 첫 프레임)
    13.58s  user  발화 끝
    13.92s  agent 발화 시작: <ret> 그 앨범의 제목은 'DEMI'입니다. 요즘 음악 감상 많이 하시나 봐요?
    14.97s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.39s]: DEMI.
    18.32s  agent 발화 끝
    18.69s  user  발화 시작: 네, 요즘 계속 듣고 있어요.
    21.04s  user  발화 끝
    21.15s  agent 발화 시작: 듣는 음악이 삶에 활력을 주는 것 같아요. 저는 그런 점이 참 좋다고 생각해요. 혹시 어떤 장르를 주로 들으
    26.46s  user  발화 시작: 음.
    26.96s  user  발화 끝
    28.99s  agent 발화 끝
    29.08s  user  발화 시작: 팝 음악을 제일 좋아해요.
    31.24s  <ret> 발화 (turn8 첫 프레임)
    31.29s  user  발화 끝
    31.56s  agent 발화 시작: <ret> 팝 음악을 좋아하시는군요. 팝 음악은 대중적이어서 듣기에도 편하고—
    32.28s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.73s]: The population of London is 8,982,000.
    35.55s  user  발화 시작: …혹시 데미 로바토 다른 노래 추천해 주실 수 있나요?
    36.28s  agent 발화 끝
    39.35s  agent 발화 시작: 아, 네. 데미 로바토의 다른 노래를 추천해 드릴게요. 'Sorry Not Sorry'나 'Skyscrape
    39.58s  user  발화 끝
    46.95s  agent 발화 끝
    47.17s  user  발화 시작: 'Skyscraper'는 정말 좋아해요.
    49.33s  agent 발화 시작: 'Skyscraper'는 정말 감동적인 노래죠. 힘든 시간을 겪을 때 많은 위로를 받았다고 하는 분들도 많아
    49.52s  user  발화 끝
    55.85s  user  발화 시작: 맞아요, 저도 위로를 많이 받았어요.
    56.24s  agent 발화 끝
    58.13s  <ret> 발화 (turn14 첫 프레임)
    58.53s  agent 발화 시작: <ret> 그렇게 느끼셨다니 정말 다행이에요. 음악은 그런 힘이 있잖아요. 잠시 다른 이야기를 해 볼까요?
    58.62s  user  발화 끝
    60.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: The capital of Australia is Canberra.
    61.74s  user  발화 시작: 예.
    62.23s  user  발화 끝
    64.60s  agent 발화 끝
    65.72s  user  발화 시작: 네, 좋아요. 뭐든 괜찮아요.
    68.13s  agent 발화 시작: 요즘 스트레스 관리는 어떻게 하고 계세요? 창작 활동에 도움이 될 만한 방법을 찾아보는 것도 좋을 것 같아요
    68.17s  user  발화 끝
    71.56s  user  발화 시작: 음.
    72.02s  user  발화 끝
    75.26s  agent 발화 끝
    75.86s  user  발화 시작: 스트레스는 주로 운동으로 풀어요.
    78.34s  agent 발화 시작: 운동으로 스트레스를 푸시는군요. 건강한 방법이네요. 규칙적인 운동은 정신 건강에도 큰 도움이 된답니다.
    78.58s  user  발화 끝
    81.53s  user  발화 시작: 네.
    81.97s  user  발화 끝
    85.71s  agent 발화 끝
    86.67s  user  발화 시작: 네, 정말 그런 것 같아요.
    88.44s  agent 발화 시작: 긍정적인 마음으로 꾸준히 운동하시면 더욱 활기찬 삶을 사실 수 있을 거예요. 혹시 운동 외에 다른 취미도 있
    88.46s  user  발화 끝
    91.38s  user  발화 시작: 아.
    91.78s  user  발화 끝
    95.18s  user  발화 시작: 그림 그리는 걸 좋아해요.
    95.39s  agent 발화 끝
    96.94s  user  발화 끝
    97.39s  agent 발화 시작: 그림 그리기를 좋아하시는군요! 창작 활동을 통해 자신을 표현하는 건 정말 멋진 일이에요. 그림 그리면서 스트
   106.76s  agent 발화 끝
   107.79s  user  발화 시작: 네, 정말 그래요.
   109.36s  user  발화 끝
   109.64s  agent 발화 시작: 그림 그리시는 게 삶에 큰 활력소가 되시는 것 같아 보기 좋아요. 좋은 하루 보내세요.
   114.69s  agent 발화 끝
