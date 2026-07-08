# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 아비치 노래 “The Nights” 영상 보다가 궁금한 게 생겼어요. 영상에 나오는 그 남자분,
     8.07s  <ret> 발화 (turn1 첫 프레임)
     8.46s  agent 발화 시작: <ret> 네, 좋은 질문이에요. 기억에 남는 영상이죠.
     8.61s  user  발화 끝
    10.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.14s]: Rory Kramer is the man featured prominently in Avicii’s “The Nights” m
    11.57s  agent 발화 시작: 말씀하신 분은 로리 크레이머 님이고, 아비치의 “The Nights” 영상에 출연하셨습니다.
    11.60s  agent 발화 끝
    17.88s  agent 발화 끝
    18.09s  user  발화 시작: 아, 로리 크레이머 님… 처음 들어봐요. 그분은 뭘 하시는 분이에요? 배우인가요?
    23.25s  <ret> 발화 (turn4 첫 프레임)
    23.57s  agent 발화 시작: <ret> 음악 영상 뒤에 숨겨진 사람들에 대해 알아보는 건 정말 흥미로운 일이죠.
    23.74s  user  발화 끝
    25.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: Rory Kramer is a free-runner and stunt performer known for his parkour
    28.68s  agent 발화 시작: 로리 크레이머 님은 프리러너이자 스턴트 퍼포머이고, 파쿠르를 전문으로 하십니다.
    28.75s  agent 발화 끝
    34.54s  user  발화 시작: 파쿠르군요? 그럼 점프하는 건 당연하네요. [laugh] 사람들이 할 수 있는 게 정말 놀라워요.
    34.65s  agent 발화 끝
    42.09s  agent 발화 시작: 정말 그렇습니다. 사람의 몸은 놀라운 능력을 가지고 있어요.
    42.24s  user  발화 끝
    46.21s  agent 발화 끝
    47.31s  user  발화 시작: 그분이 그 영상에 특별히 고용된 건가요, 아니면 그냥 우연히 된 건가요?
    51.00s  <ret> 발화 (turn9 첫 프레임)
    51.07s  agent 발화 시작: <ret> 기회가 어떻게 생기는지 궁금해하시는 건 당연한 질문이에요.
    51.19s  user  발화 끝
    52.76s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.25s]: Kramer was contacted by the video’s director to perform parkour stunts
    55.21s  agent 발화 시작: 로리 크레이머 님은 영상 감독님으로부터 직접 연락을 받아서 스턴트를 하게 되셨습니다.
    55.32s  agent 발화 끝
    61.32s  agent 발화 끝
    61.66s  user  발화 시작: 그렇군요. 길에서 그냥 찾은 사람은 아니었네요.
    64.40s  agent 발화 시작: 영상 기회가 그렇게 우연히 찾아오는 경우는 드물어요.
    64.51s  user  발화 끝
    68.43s  agent 발화 끝
    68.55s  user  발화 시작: 다른 영상들도 찾아봤는데, 다른 뮤지션들과도 함께 작업한 적이 있잖아요, 그렇죠?
    73.68s  <ret> 발화 (turn14 첫 프레임)
    74.08s  agent 발화 시작: <ret> 네, 꽤 다양한 분야에서 활동하고 계세요.
    74.24s  user  발화 끝
    75.52s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.09s]: Rory Kramer has collaborated with artists including Swedish House Mafi
    77.17s  agent 발화 시작: 로리 크레이머 님은 스웨디시 하우스 마피아와 자라 라르손과 함께 작업했습니다.
    77.17s  agent 발화 끝
    82.56s  user  발화 시작: 스웨디시 하우스 마피아… 알겠어요. 그 음악에 어울리는 분위기네요. 음, 아비치 영상 이후에 유명해졌나요?
    82.69s  agent 발화 끝
    89.94s  <ret> 발화 (turn17 첫 프레임)
    90.26s  agent 발화 시작: <ret> 유명한 음악 영상은 사람의 인지도를 높일 수 있죠.
    90.30s  user  발화 끝
    91.62s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.79s]: “The Nights” significantly increased Rory Kramer’s visibility and led 
    94.05s  agent 발화 끝
    94.22s  agent 발화 시작: “The Nights” 영상 덕분에 로리 크레이머 님의 인지도가 크게 높아졌고, 더 많은 일을 하게 되었습니
   100.94s  agent 발화 끝
   100.95s  user  발화 시작: 멋지네요. 스턴트 퍼포머도 괜찮은 직업인 것 같아요. 그럼, 원래 어디 출신이에요?
   106.15s  <ret> 발화 (turn20 첫 프레임)
   106.22s  agent 발화 시작: <ret> 사람들의 고향과 열정을 추구하는 과정에 대해 알아보는 건 정말 흥미로운 일이죠.
   106.41s  user  발화 끝
   108.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.78s]: Rory Kramer was born and raised in the Netherlands, beginning parkour 
   111.98s  agent 발화 시작: 로리 크레이머 님은 원래 네덜란드 출신이고, 열네 살 때 파쿠르를 시작했습니다.
   112.01s  agent 발화 끝
   117.68s  agent 발화 끝
   119.43s  user  발화 시작: 네덜란드… 흥미롭네요. 네덜란드를 생각하면 풍차가 떠올라요.
   123.28s  agent 발화 시작: [laugh] 아름다운 역사와 문화를 가진 나라입니다.
   123.45s  user  발화 끝
   127.91s  agent 발화 끝
   129.10s  user  발화 시작: 자, 마지막 질문이에요, 약속할게요. 파쿠르 말고 다른 재능도 있어요? 악기를 다룰 줄 아나 봐요?
   135.56s  <ret> 발화 (turn25 첫 프레임)
   135.71s  agent 발화 시작: <ret> 창의적인 사람들은 다양한 재능과 관심을 가지고 있는 경우가 많아요.
   135.95s  user  발화 끝
   137.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.77s]: Besides parkour, Rory Kramer is also a skilled skateboarder and musici
   140.03s  agent 발화 시작: 로리 크레이머 님은 스케이트보드도 잘 타고, 악기도 연주합니다.
   140.48s  agent 발화 끝
   144.75s  agent 발화 끝
   144.97s  user  발화 시작: 와, 만능이시네요! 정말 대단해요. 정보 감사합니다, 바스케스 선생님.
   150.22s  agent 발화 시작: 도와드릴 수 있어서 기쁩니다. 아는 것을 공유하게 되어 기뻐요.
   150.29s  user  발화 끝
   155.03s  agent 발화 끝
