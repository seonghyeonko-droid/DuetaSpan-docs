# v3_hesit_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음, 아레나 채플 벽화는 누가 그린 거야? 그게 맞나…
     5.84s  user  발화 끝
     5.87s  agent 발화 시작: 정말 흥미로운 질문이네요. 정말 멋진 공간에 대한 질문이에요.
    14.46s  user  발화 시작: 그래, 음, 미술사 시간에 본 것 같은데… 머리끝에 걸려 있어.
    14.49s  agent 발화 끝
    19.49s  <ret> 발화 (turn3 첫 프레임)
    20.08s  agent 발화 시작: <ret> 잠깐 찾아볼게요… 조토 디 본도네가 파도바의 스크로베니 예배당 벽화를 그렸어요. 이탈리아 회화에서
    20.25s  user  발화 끝
    20.49s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.54s]: Giotto di Bondone was commissioned to paint the Scrovegni Chapel, also
    26.01s  agent 발화 끝
    26.90s  user  발화 시작: 조토, 그렇지! 좋아. 그럼 그 예배당은 언제 완공됐어?
    31.94s  <ret> 발화 (turn5 첫 프레임)
    32.54s  agent 발화 시작: <ret> 좋은 질문이네요. 스크로베니 예배당의 벽화는 대략 서기 천삼백오년에 완성됐어요. 미술사에서 중요한
    32.69s  user  발화 끝
    32.94s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.12s]: The Scrovegni Chapel’s frescoes were completed around 1305.
    42.78s  agent 발화 끝
    42.88s  user  발화 시작: 천삼백오년… 흠. 조토는 이탈리아 사람이야? 파도바라는 걸 생각하면 당연하겠지만…
    47.57s  agent 발화 시작: 네, 조토는 이탈리아 사람이 맞아요.
    47.73s  user  발화 끝
    54.68s  user  발화 시작: 그래, 그래. 알겠어. [sigh] 어떤 화풍이야? 르네상스 초기야?
    54.80s  agent 발화 끝
    60.80s  <ret> 발화 (turn9 첫 프레임)
    61.40s  user  발화 끝
    61.40s  agent 발화 시작: <ret> 예술 발전의 중요한 시점이에요. 조토의 스크로베니 예배당 작품은 르네상스 양식의 중요한 선구자예요
    61.80s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.46s]: Giotto’s work in the Scrovegni Chapel is considered a key precursor to
    73.44s  user  발화 시작: 그럼, 르네상스 이전이네. 흥미롭다. 돈을 낸 후원자는 있었어?
    73.51s  agent 발화 끝
    78.06s  <ret> 발화 (turn11 첫 프레임)
    78.66s  agent 발화 시작: <ret> 그 시대에는 후원자가 중요했어요. 엔리코 스크로베니가 아버지의 죄를 씻기 위해 예배당을 지었대요.
    78.82s  user  발화 끝
    79.06s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.52s]: Enrico Scrovegni commissioned the chapel as an act of penance for his 
    84.81s  user  발화 시작: 고리대금업에 대한 속죄… 그거 좀 특이하네. 와우.
    84.96s  agent 발화 끝
    90.27s  user  발화 끝
    90.28s  agent 발화 시작: 그 시대의 사회적, 종교적 맥락을 잘 보여주는 것 같아요.
    99.23s  agent 발화 끝
    99.73s  user  발화 시작: 그래. 음, 직접 보고 싶으면 어느 도시에 있어?
   105.66s  <ret> 발화 (turn15 첫 프레임)
   106.25s  agent 발화 시작: <ret> 아름다운 도시예요. 스크로베니 예배당은 이탈리아 파도바에 있어요. 정말 감동적인 경험을 할 수 있
   106.44s  user  발화 끝
   106.66s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.38s]: The Scrovegni Chapel is located in Padua, Italy.
   114.13s  agent 발화 끝
   114.73s  user  발화 시작: 파도바, 이탈리아. 알았어. 정말 도움이 됐어, 고마워.
   119.56s  agent 발화 시작: 천만에요. 연구에 도움이 됐다니 기쁘네요.
   119.60s  user  발화 끝
   123.26s  agent 발화 끝
