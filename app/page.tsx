import InteriorCarousel from "@/components/InteriorCarousel";

export default function Home() {
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" aria-label="毛茸小屋首页">
          <span className="brand-mark">爪</span>
          <span>毛茸小屋宠物洗护</span>
        </a>
        <nav className="nav-links" aria-label="页面导航">
          <a href="#interior">店内环境</a>
          <a href="#services">洗护服务</a>
          <a href="#price">套餐价格</a>
          <a href="#process">护理流程</a>
          <a href="#booking">预约到店</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">宠物洗澡 · 造型修剪 · 皮毛护理</span>
            <h1>让每一只小可爱都清爽回家</h1>
            <p>
              一对一洗护间、低噪烘干箱、温和宠物专用洗剂。我们把洗澡这件小事，做得干净、安心，也更有仪式感。
            </p>
            <div className="hero-actions">
              <a className="btn" href="#booking">
                立即预约
              </a>
              <a className="btn secondary" href="#services">
                查看服务
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="宠物洗护插画">
            <div className="pet-photo">
              <span className="bubble one" />
              <span className="bubble two" />
              <span className="bubble three" />
            </div>
            <div className="hero-card-row">
              <div className="hero-stat">
                <strong>45min</strong>
                <span>小型宠物基础洗护</span>
              </div>
              <div className="hero-stat">
                <strong>1v1</strong>
                <span>专属洗护师看护</span>
              </div>
              <div className="hero-stat">
                <strong>24h</strong>
                <span>护理反馈可追踪</span>
              </div>
            </div>
          </div>
        </section>

        <section className="interior-band" id="interior">
          <div className="section-head">
            <h2>高端洗护空间，干净也有温度</h2>
            <p>
              参考中国一线城市高端宠物洗护店的室内气质，分区清晰、材质温润、设备专业。
            </p>
          </div>
          <InteriorCarousel />
        </section>

        <section id="services">
          <div className="section-head">
            <h2>从脚掌到耳朵，都照顾到位</h2>
            <p>
              服务按宠物体型、毛量和皮肤状态定制，减少应激，让洗护体验更轻松。
            </p>
          </div>
          <div className="services">
            <article className="service">
              <div className="service-icon">浴</div>
              <h3>基础香浴</h3>
              <p>
                温水冲洗、宠物专用香波、护毛素护理、顺毛吹干，适合日常清洁。
              </p>
            </article>
            <article className="service">
              <div className="service-icon">剪</div>
              <h3>造型修剪</h3>
              <p>
                脸型、脚型、腹底、尾部和整体造型修剪，保留宠物自然可爱的轮廓。
              </p>
            </article>
            <article className="service">
              <div className="service-icon">护</div>
              <h3>皮毛护理</h3>
              <p>
                针对干燥、打结、换毛期进行梳理护理，帮助毛发蓬松柔顺。
              </p>
            </article>
            <article className="service">
              <div className="service-icon">检</div>
              <h3>细节检查</h3>
              <p>
                清洁耳道、修剪指甲、脚底毛处理，并同步记录皮肤和毛发状态。
              </p>
            </article>
          </div>
        </section>

        <section className="price-band" id="price">
          <div className="section-head">
            <h2>清楚透明的洗护套餐</h2>
            <p>
              到店后会先评估体型、毛结和皮肤情况，复杂护理会提前确认再开始。
            </p>
          </div>
          <div className="prices">
            <article className="price">
              <h3>基础清爽</h3>
              <p className="amount">
                ¥88<small> 起</small>
              </p>
              <ul>
                <li>日常香浴清洁</li>
                <li>吹干梳毛</li>
                <li>指甲基础修剪</li>
              </ul>
              <a className="btn secondary" href="#booking">
                选择套餐
              </a>
            </article>
            <article className="price featured">
              <h3>精致护理</h3>
              <p className="amount">
                ¥168<small> 起</small>
              </p>
              <ul>
                <li>基础香浴全套</li>
                <li>耳道与脚底护理</li>
                <li>局部造型修剪</li>
                <li>护理反馈卡</li>
              </ul>
              <a className="btn" href="#booking">
                人气预约
              </a>
            </article>
            <article className="price">
              <h3>焕新造型</h3>
              <p className="amount">
                ¥268<small> 起</small>
              </p>
              <ul>
                <li>全身造型设计</li>
                <li>深层护毛护理</li>
                <li>去浮毛梳理</li>
                <li>完工留影</li>
              </ul>
              <a className="btn secondary" href="#booking">
                选择套餐
              </a>
            </article>
          </div>
        </section>

        <section id="process">
          <div className="section-head">
            <h2>到店后，每一步都有节奏</h2>
            <p>
              先安抚，再清洁，最后确认状态。流程稳定，宠物也更容易放松。
            </p>
          </div>
          <div className="process">
            <div className="process-visual" aria-hidden="true">
              <div className="spray" />
              <div className="foam-dot a" />
              <div className="foam-dot b" />
              <div className="foam-dot c" />
              <div className="tub" />
            </div>
            <div className="steps">
              <article className="step">
                <div className="step-num">01</div>
                <div>
                  <h3>状态评估</h3>
                  <p>
                    确认宠物性格、皮肤、毛结、疫苗和特殊禁忌，制定洗护方式。
                  </p>
                </div>
              </article>
              <article className="step">
                <div className="step-num">02</div>
                <div>
                  <h3>温和清洁</h3>
                  <p>
                    使用适配皮肤状态的洗剂，控制水温和吹风声音，降低紧张感。
                  </p>
                </div>
              </article>
              <article className="step">
                <div className="step-num">03</div>
                <div>
                  <h3>精修整理</h3>
                  <p>
                    完成指甲、耳朵、脚底毛和局部修剪，让宠物干净又利落。
                  </p>
                </div>
              </article>
              <article className="step">
                <div className="step-num">04</div>
                <div>
                  <h3>交付反馈</h3>
                  <p>
                    同步护理记录和日常建议，提醒下次洗护周期与居家梳毛重点。
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="store" id="booking">
          <div className="store-info">
            <div className="section-head">
              <h2>欢迎预约到店</h2>
              <p>建议提前一天预约，节假日和周末时段较满。</p>
            </div>
            <div className="info-row">
              <strong>门店地址</strong>
              <span>上海市静安区暖阳路 66 号 1 层</span>
            </div>
            <div className="info-row">
              <strong>营业时间</strong>
              <span>周一至周日 10:00 - 20:00</span>
            </div>
            <div className="info-row">
              <strong>联系电话</strong>
              <span>021-8888-6626</span>
            </div>
          </div>

          <form className="booking">
            <h2>预约洗护</h2>
            <label htmlFor="petName">宠物昵称</label>
            <input id="petName" name="petName" placeholder="例如：奶盖" />

            <label htmlFor="service">选择服务</label>
            <select id="service" name="service" defaultValue="精致护理">
              <option>精致护理</option>
              <option>基础清爽</option>
              <option>焕新造型</option>
              <option>皮毛专项护理</option>
            </select>

            <label htmlFor="time">期望到店时间</label>
            <input id="time" name="time" type="datetime-local" />

            <label htmlFor="note">补充说明</label>
            <textarea
              id="note"
              name="note"
              placeholder="宠物体型、性格、皮肤情况或特殊需求"
            />

            <button className="btn" type="button">
              提交预约
            </button>
          </form>
        </section>
      </main>

      <footer>
        <span>© 2026 毛茸小屋宠物洗护店</span>
        <span>干净、温柔、可追踪的宠物洗护体验</span>
      </footer>
    </>
  );
}
